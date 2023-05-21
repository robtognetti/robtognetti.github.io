'use client'
import React from 'react';
import { FcGoogle } from 'react-icons/fc'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='flex flex-col items-center justify-center w-full h-screen'>
      <nav className='flex flex-row justify-between'>
        <div>Olá, visitante.</div>
        <button
          className='flex flex-row items-center gap-x-2 bg-white text-black p-2 rounded shadow-md'
          onClick={ () => console.log('hol') }
        >
          <FcGoogle /> Conectar com Google
        </button>
      </nav>
      <div>
        Cards etc.
      </div>
    </main>
  )
}