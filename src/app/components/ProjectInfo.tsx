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
      color: 'text-black',
      bg: 'bg-red-200',
    },
    {
      color: 'text-black',
      bg: 'bg-orange-400',
    },
    {
      color: 'text-zinc-900',
      bg: 'bg-lime-300',
    },
    {
      color: 'text-zinc-900',
      bg: 'bg-teal-200',
    },
    {
      color: 'text-zinc-100',
      bg: 'bg-indigo-500',
    },
    {
      color: 'text-zinc-900',
      bg: 'bg-yellow-400',
    },
  ];
  const coloringStacks = () => {
    const random = Math.floor(Math.random() * palete.length);
    return `${palete[random].color} ${palete[random].bg} px-2 py-[4px] mr-4 rounded border-zinc-950 border-[1px] shadow-md text-xs`
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center min-h-screen w-full p-8 gap-4'>

      {/* Project name div */}
      <div className='md:w-[40vw] flex flex-col items-start gap-y-6'>
        <div className='flex flex-row'>
          <div className='min-w-[130px] md:min-w-[200px] text-left font-light border-b-slate-400 border-b-[0.5px] mr-2'>
            Title
          </div>
          <h1 className='font-semibold ml-2 tracking-wider'>{project.projectname}</h1>
        </div>

        {/* Description div */}
        <div className='flex flex-row'>
          <div className='min-w-[130px] md:min-w-[200px] text-left font-light mr-2'>
            <div className='border-b-slate-400 border-b-[0.5px]'>
              Description
            </div>
          </div>
          <p className='text-justify ml-2'>{project.description}</p>
        </div>

        { /* Stacks div appear only if have at least one stack saved */
          (project.stacks.length > 0) && (
            <div className='flex flex-row'>
              <div className='min-w-[130px] md:min-w-[200px]  text-left font-light mr-2'>
                <div className='border-b-slate-400 border-b-[0.5px]'>Stacks</div>
              </div>
              <div className='flex flex-row flex-wrap gap-y-2 ml-2'>{ project.stacks?.map((stack) => (
                <span
                  key={stack}
                  className={ coloringStacks() }
                >
                  {stack}
                </span>
              ))}</div>
            </div>
          )
        }

        { /* Links div appear only if have one link saved */
          (project.githuburl || project.deployurl) && (
            <div className='flex flex-row'>
              <div className='min-w-[130px] md:min-w-[200px] text-left font-light mr-2'>
                <div className='border-b-slate-400 border-b-[0.5px]'>
                  Links
                </div>
              </div>
              <div className='flex flex-row flex-wrap gap-y-2 gap-x-4 ml-2'>
                <IconContext.Provider value={{ size: '20' }}>
                  {project.githuburl && (<Link href={project.githuburl} target='blank' className='flex flex-row text-xs gap-x-2 items-center px-2 py-[4px] border-zinc-500 border-[1px] rounded hover:bg-slate-100'>
                    <AiOutlineGithub /> Github repo
                  </Link>)}
                  {project.deployurl && (<Link href={project.deployurl} target='blank' className='flex flex-row text-xs gap-x-2 items-center px-2 py-[4px] border-zinc-500 border-[1px] rounded hover:bg-slate-100'>
                    <AiOutlineGlobal /> Live version
                  </Link>)}
                </IconContext.Provider>
              </div>
            </div>
          )
        }
      </div>
      <div className='md:w-[58vw]'>
        <img
          key={project.slug}
          src={project.screenshot as string}
          alt={project.projectname}
          style={{ maxHeight: '90vh', maxWidth: '90%', objectFit: 'contain', boxShadow: '-2px 2px 10px 0 #999' }}
        />
      </div>
    </div>
  );
}