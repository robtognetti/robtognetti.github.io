'use client'
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { useSession, signIn, signOut } from 'next-auth/react';
import UserCard from '../components/UserCard'

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main className='flex items-center justify-center w-full h-[100vh]'>
        <button onClick={ () => signOut() }>
          Desconectar
        </button>
        <UserCard user={ session?.user } />
      </main>
    )
  } else {
    return (
      <button
        className='flex flex-row gap-4 items-center bg-zinc-50 p-2 border-2 rounded-md'
        onClick={ () => signIn() }
      >
        <BsGithub /> Conectar com Github
      </button>
    )
  }
};