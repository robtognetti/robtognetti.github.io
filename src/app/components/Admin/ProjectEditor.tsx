import React, { useState } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { Project } from './ManageProject';

type Props = {
  data: Project;
};

function ProjectEditor({ data }: Props) {
  const [active, setActive] = useState<boolean>(false);
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
          {data.projectname}
        </h2>
      </div>
      {active && (
        <div className='flex flex-col justify-center'>
          <form className='flex flex-col lg:flex-row lg:w-full items-center justify-evenly'>
            <div className='flex flex-col items-start gap-y-4 p-4 w-full lg:w-2/3'>
              <label htmlFor='projectname' className='flex flex-col text-xs'>
                Project title:
                <input
                  id='projectname'
                  required
                  type='text'
                  placeholder='Project name'
                  defaultValue={ data.projectname }
                  className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
                />
              </label>
              <label htmlFor='projectname' className='flex flex-col text-xs'>
                Project title:
                <textarea
                  id='description'
                  placeholder='Description of your project'
                  defaultValue={ data.description }
                  className='w-96 h-32 p-2 text-sm border-[1px] border-sky-700 rounded'
                >
                </textarea>
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProjectEditor;
