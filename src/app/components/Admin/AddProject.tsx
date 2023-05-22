import React from 'react'

type Props = {}

export default function AddProject({}: Props) {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      projectname: event.target.projectname.value,
      description: event.target.description.value,
      githuburl: event.target.githuburl.value,
      deployurl: event.target.deployurl.value,
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
    const response = await fetch(endpoint, options);
    if (response.status !== 200) alert('Erro ao cadastrar projeto!');
    console.log(response.json());
    // if (result.status === 200) alert('Projeto cadastrado com sucesso!');
    // else alert('Erro ao cadastrar projeto!');
  };

  return (
    <section className='flex flex-col w-full items-center justify-center mt-4'>
      <h1 className='text-xl uppercase text-yellow-950 font-extrabold'>ADD NEW PROJECT</h1>
      <div className='mt-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <label htmlFor='projectname' className='flex flex-col text-xs'>
            Nome do projeto
          <input
            id='projectname'
            required
            type='text'
            placeholder='Project name'
            className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
            />
          </label>
          <label htmlFor='description' className='flex flex-col text-xs'>
            Descrição do projeto
          <textarea
            id='description'
            placeholder='Type a description of your project'
            className='h-40 p-2 text-sm border-[1px] border-sky-700 rounded'
          />
          </label>
          <label htmlFor='githuburl' className='flex flex-col text-xs'>
            Github URL (opcional)
          <input
            id='githuburl'
            type='text'
            placeholder='The URL for your GH repo project'
            className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
            />
          </label>
          <label htmlFor='deployurl' className='flex flex-col text-xs'>
            Deploy URL (opcional)
          <input
            id='deployurl'
            type='text'
            placeholder='The URL for your project deployed'
            className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
            />
          </label>
          <button type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}