import React, { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

type Props = {
  handleWarning: (message: string) => void;
};

export default function AddProject({ handleWarning }: Props) {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState('');
  const [slug, setSlug] = useState('');

  const handleUpload = async () => {
    setUploading(true);
    const storage = getStorage();
    const storageRef = ref(storage, slug + '/' + selectedFile?.name);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile as File)
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        handleWarning('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            handleWarning('Upload is paused');
            break;
        }
      },
      (error) => { handleWarning(error.message) },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          handleWarning('Upload successfull!')
          setImageUrl(downloadURL)
          setUploading(false);
        });
      }
    );
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      slug: slug,
      projectname: event.target.projectname.value,
      description: event.target.description.value,
      githuburl: event.target.githuburl.value,
      deployurl: event.target.deployurl.value,
      screenshot: imageUrl,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/form';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    await fetch(endpoint, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'SUCCESS')
          handleWarning('201: Projeto cadastrado com sucesso');
        else
          handleWarning(
            data.message || 'Ocorreu um erro ao cadastrar o projeto',
          );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section className='flex flex-col w-full items-center justify-center'>
      <h1 className='text-xl uppercase text-yellow-950 font-extrabold'>
        ADD NEW PROJECT
      </h1>
      <div className='mt-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <label htmlFor='projectname' className='flex flex-col text-xs'>
            Project title:
            <input
              id='projectname'
              required
              type='text'
              placeholder='Project name'
              onChange={ (event) => setSlug(event.target.value.toLowerCase().replace(/ /g, '_')) }
              className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
            />
          </label>
          <label htmlFor='projectname' className='flex flex-col text-xs'>
            This is the project slug
            <input
              className='h-6 p-2 border-[1px] border-sky-700 rounded disabled:text-gray-500'
              disabled={ true }
              type='text'
              value={ slug }
            />
          </label>
          <label htmlFor='description' className='flex flex-col text-xs'>
            Description:
            <textarea
              id='description'
              placeholder='Type a description of your project'
              className='h-40 p-2 text-sm border-[1px] border-sky-700 rounded'
            />
          </label>
          <label htmlFor='githuburl' className='flex flex-col text-xs'>
            Github URL (optional)
            <input
              id='githuburl'
              type='text'
              placeholder='The URL for your GH repo project'
              className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
            />
          </label>
          <label htmlFor='deployurl' className='flex flex-col text-xs'>
            Deploy URL (optional)
            <input
              id='deployurl'
              type='text'
              placeholder='The URL for your project deployed'
              className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
            />
          </label>
          <label>
            <input
              type='file'
              hidden
              onChange={ ({target}) => {
                if (target.files) {
                  const file = target.files[0];
                  setSelectedImage(URL.createObjectURL(file));
                  setSelectedFile(file);
                }
              }}
            />
            <div className='aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
              {selectedImage ? (
                <img src={selectedImage} alt='Screenshot of your project' style={{ maxWidth: '400px' }} />
              ) : (
                <span>Select screenshot</span>
              )}
            </div>
          </label>
          <button
            disabled={ uploading }
            style={{ opacity: uploading ? '.5' : '1' }}
            className='bg-red-600 p-2 text-center rounded text-white'
            onClick={handleUpload}
          >
            { uploading ? 'Wait...' : 'Upload' }
          </button>
          <button
            type='submit'
            disabled={ uploading }
            className='bg-blue-600 p-4 text-center rounded text-white'
          >Cadastrar</button>
        </form>
      </div>
    </section>
  );
}
