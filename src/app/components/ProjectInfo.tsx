import React from 'react';
import { Project } from './Projects';
import { AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai';
import { IconContext } from "react-icons";
import Link from 'next/link';

type Props = {
  project: Project;
};

export default function ProjectInfo({ project }: Props) {
  const palete = [
    {
      color: 'black',
      bg: 'red-200',
    },
    {
      color: 'black',
      bg: 'orange-400',
    },
    {
      color: 'zinc-900',
      bg: 'lime-300',
    },
    {
      color: 'zinc-900',
      bg: 'teal-200',
    },
    {
      color: 'zinc-100',
      bg: 'indigo-500',
    },
    {
      color: 'zinc-900',
      bg: 'yellow-400',
    },
  ];
  const coloringStacks = () => {
    const random = Math.floor(Math.random() * palete.length);
    return `text-${palete[random].color} bg-${palete[random].bg} px-2 py-[4px] mr-4 rounded border-zinc-950 border-[1px] shadow-md text-xs md:text-sm`
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-screen w-full px-4 gap-4 text-sm'>
      {/* Project name div */}
      <div className='md:w-[40vw] flex flex-col items-start gap-y-6 gap-x-8'>
        <div className='flex flex-row'>
          <div className='min-w-[200px] text-left font-light border-b-slate-400 border-b-[0.5px] mr-2'>
            Title
          </div>
          <h1 className='font-bold ml-2'>{project.projectname}</h1>
        </div>
        {/* Description div */}
        <div className='flex flex-row'>
          <div className='min-w-[200px] text-left font-light mr-2'>
            <div className=' border-b-slate-400 border-b-[0.5px]'>
              Description
            </div>
          </div>
          <p className='text-justify ml-2'>{project.description}</p>
        </div>
        {/* Stacks div */}
        <div className='flex flex-row'>
          <div className='min-w-[200px] text-left font-light mr-2'>
            <div className=' border-b-slate-400 border-b-[0.5px]'>Stacks</div>
          </div>
          <div className='flex flex-col gap-y-2 md:flex-row ml-2'>{ project.stacks?.map((stack) => (
            <span
              key={stack}
              className={ coloringStacks() }
            >
              {stack}
            </span>
          ))}</div>
        </div>
        {/* Links div */}
        <div className='flex flex-row'>
          <div className='min-w-[200px] text-left font-light mr-2'>
            <div className=' border-b-slate-400 border-b-[0.5px]'>
              Links
            </div>
          </div>
          <div className='flex flex-col gap-y-2 md:flex-row gap-x-4 ml-2'>
            <IconContext.Provider value={{ size: '20' }}>
              {project.githuburl && (<Link href={project.githuburl} target='blank' className='flex flex-row text-xs gap-x-2 items-center px-2 py-[4px] border-zinc-500 border-[1px] rounded hover:bg-slate-100'>
                <AiOutlineGithub /> Github repo
              </Link>)}
              {project.deployurl && (<Link href={project.deployurl} target='blank' className='flex flex-row text-xs gap-x-2 items-center px-2 py-[4px] border-zinc-500 border-[1px] rounded hover:bg-slate-100'>
                <AiOutlineGlobal /> See it live
              </Link>)}
            </IconContext.Provider>
          </div>
        </div>
      </div>

      <div className='md:w-[58vw]' style={{ boxShadow: '10px 0 0 0 #f0f1f5' }}>
        <img
          key={project.slug}
          src={project.screenshot as string}
          alt={project.projectname}
          style={{ maxHeight: '90vh', maxWidth: '90%', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
