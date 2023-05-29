import React from 'react';

import { signOut, getAuth } from 'firebase/auth';

type Props = {
  warning?: string;
}

export default function HeaderMenu({ warning }: Props) {
  return (
    <nav className='flex flex-col w-full items-start fixed'>
      <div className='w-full h-14 bg-gradient-to-br from-sky-950 to-sky-700 text-white flex flex-row items-center px-6 gap-x-4 '>
        <div className='min-w-[250px] text-xs'>
          <button
            className='border-slate-200 border-[1px] rounded p-2'
            onClick={ () => signOut(getAuth()) }
          >
            Click here to logout
          </button>
        </div>
        <div className='w-full text-left transition'>
          { warning }
        </div>
      </div>
      <div className='w-full flex flex-row items-center justify-center gap-x-10'>
        <div className='w-32 bg-gray-700 text-center'>
          Add project
        </div>
        <div>
          Manage projects
        </div>
        <div>
          Fun facts
        </div>
      </div>
    </nav>
  )
}