'use client'
import { initFirebase } from '@/firebase/firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { Fragment, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AddProject from '../components/Admin/AddProject';
import ManageProject from '../components/Admin/ManageProject';
import HeaderMenu from '../components/Admin/HeaderMenu';
type Props = {}

export default function Page({}: Props) {
  const [user, setUser] = useState({} as any);
  const [warning, setWarning] = useState('' as string);

  // We're using Firebase auth here
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  // This is a hook that checks if user is still connected
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser({});
    });
    return () => unsubscribe();
  }, [auth])

  const handleWarning = (message: string) => {
    setWarning(message);
    return setTimeout(() => {
      setWarning('');
    }, 6000)
  }

  // Don't forget to configure your enviromnent variables
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  }
  
  // If user is admin, show admin components
  if (user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <Fragment>
        <HeaderMenu warning={ warning } />
        <main className='py-20'>
          <AddProject handleWarning={ handleWarning } />
          <ManageProject />
        </main>
      </Fragment>
    )
  }

  return (
    <main className='flex flex-col items-center justify-center w-full h-screen gap-y-4'>
      <button
        className='flex flex-row items-center gap-x-2 bg-white-100 border-gray-800 border-[0.5px] border-opacity-30 text-black p-2 rounded shadow-md'
        onClick={ signIn }
      >
        <FcGoogle /> Login with Google
      </button>
      { user.displayName && (
        <div className='flex flex-col items-center justify-center text-sm'>
          <h5>Logged in as <strong>{ user.displayName }</strong></h5>
          <p>({ user.email })</p>
        </div>
      ) }
    </main>
  )
}