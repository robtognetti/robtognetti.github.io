'use client'
import { initFirebase } from '@/firebase/firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AddProject from '../components/Admin/AddProject';
import ManageProject from '../components/Admin/ManageProject';
type Props = {}

export default function Page({}: Props) {
  const [user, setUser] = useState({} as any);

  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser({});
    });
    return () => unsubscribe();
  }, [auth])

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    (result.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) ? setUser(result.user) : setUser({});
  }
  
  if (user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <main>
        <AddProject />
        <ManageProject />
      </main>
    )
  }

  return (
    <main className='flex flex-col items-center justify-center w-full h-screen'>
      <button
        className='flex flex-row items-center gap-x-2 bg-white text-black p-2 rounded shadow-md'
        onClick={ signIn }
      >
        <FcGoogle /> Conectar com Google
      </button>
    </main>
  )
}