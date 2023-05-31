import React, { useState } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { Project } from './ManageProject';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

type Props = {
  data: any;
  handleWarning: (message: string) => void;
};

function ProjectEditor({ data, handleWarning }: Props) {
  const id = Object.keys(data)[0];
  const project = data[Object.keys(data)[0]];
  const [active, setActive] = useState<boolean>(false);
  const [notdeleting, setNotdeleting] = useState(true);
  const [notconfirmed, setNotconfirmed] = useState(true);

  const deleteProject = async (e: any) => {
    e.preventDefault();
   await deleteDoc(doc(db, 'projects', id));
    handleWarning('Project deleted');
  }

  return (
    <div
      className={`w-[80vw] flex flex-col justify-between ${active
          ? 'border-violet-500 border-opacity-75'
          : 'border-violet-500 border-opacity-25'
        } border-solid border-2 py-2 px-4`}
    >
      <div className='flex flex-row gap-x-4'>
        <button onClick={() => setActive(!active)}>
          {active ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
        </button>
        <h2 className={`${active ? 'font-semibold' : ''}`}>
          {project.projectname}
        </h2>
      </div>
      {active && (
        <div className='flex justify-center w-full'>
          <form className='flex flex-col lg:w-full items-center justify-evenly'>
            <div className='flex flex-row'>
              <div className='flex flex-col items-start gap-y-4 p-4 w-full'>
                <label htmlFor='projectname' className='flex flex-col text-xs'>
                  Project title:
                  <input
                    id='projectname'
                    required
                    type='text'
                    placeholder='Project name'
                    defaultValue={ project.projectname }
                    className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
                  />
                </label>
                <label htmlFor='projectname' className='flex flex-col text-xs'>
                  Project title:
                  <textarea
                    id='description'
                    placeholder='Description of your project'
                    defaultValue={ project.description }
                    className='w-96 h-32 p-2 text-sm border-[1px] border-sky-700 rounded'
                  >
                  </textarea>
                </label>
              </div>
              <div className='flex flex-col items-start gap-y-4 p-4 w-full'>
                <label htmlFor='githuburl' className='flex flex-col text-xs'>
                  Github URL (optional)
                  <input
                    id='githuburl'
                    type='text'
                    placeholder='http://github.com...'
                    defaultValue={ project.githuburl }
                    className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
                  />
                </label>
                <label htmlFor='deployurl' className='flex flex-col text-xs'>
                  Deploy URL (optional)
                  <input
                    id='deployurl'
                    type='text'
                    placeholder='http://mywebsite.com'
                    defaultValue={ project.deployurl }
                    className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
                  />
                </label>
              </div>
            </div>
            <div
              hidden={ notdeleting }
              className='flex gap-x-4 items-center'
            >
              <label
                className='text-gray-600'
                hidden={ notdeleting }
              >
                <input
                  id='confirmdelete'
                  type='checkbox'
                  hidden={ notdeleting }
                  onChange={ () => setNotconfirmed(!notconfirmed) }
                /> I really want to delete this project.
              </label>
              <button
                className='bg-blue-600 text-center text-sm p-1 rounded text-white disabled:bg-blue-300 disabled:text-gray-100 disabled:cursor-not-allowed'
                hidden={ notdeleting }
                disabled={ notconfirmed }
                onClick={ deleteProject }
              >
                Confirm delete
              </button>
            </div>
            <div className='flex gap-4 p-2'>
              <button
                className='bg-blue-600 p-2 text-center rounded text-white w-[300px] disabled:bg-blue-300 disabled:text-gray-100 disabled:cursor-not-allowed'
              >
                Save
              </button>
              <button
                className='bg-blue-800 p-2 text-center rounded text-white w-[300px] disabled:bg-blue-300 disabled:text-gray-100 disabled:cursor-not-allowed'
                onClick={ (e) => {
                  e.preventDefault();
                  setNotdeleting(!notdeleting);
                } }
              >
                Delete project
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProjectEditor;
