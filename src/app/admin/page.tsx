'use client';
import { initFirebase } from '@/firebase/firebase';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import React, { Fragment, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import HeaderMenu from '../components/Admin/HeaderMenu';
import AddProject from '../components/Admin/AddProject';
import ManageProject from '../components/Admin/ManageProject';

type Props = {};

const stackList = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Flutter',
  'HTML/CSS',
  'Tailwind CSS',
  'Bootstrap',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Wordpress',
  'Jest',
  'Mocha',
  'Chai',
  'Cypress',
  'React Testing Library',
  'Jasmine',
  'Google Firebase',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'C#',
  'Java',
  'C++',
  'C',
  'PHP',
  'Ruby',
  'Go',
  'Kotlin',
  'Swift',
  'Dart',
  'Rust',
  'Scala',
  'Haskell',
  'Lua',
];

export default function Page({}: Props) {
  const [user, setUser] = useState({} as any);
  const [warning, setWarning] = useState<string | undefined>('' as string);

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
  }, [auth]);

  const handleWarning = (message: string) => {
    const warningTimeout = setTimeout(() => setWarning(undefined), 6000);
    if (warning) {
      clearTimeout(warningTimeout);
      setWarning(message);
      return warningTimeout;
    }
    setWarning(message);
    return warningTimeout;
  };

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  // If user is admin, show admin components
  if (user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <Fragment>
        <HeaderMenu warning={warning} />
        <main className='py-20'>
          <AddProject handleWarning={handleWarning} stackList={stackList} />
          <ManageProject handleWarning={handleWarning} stackList={stackList} />
        </main>
      </Fragment>
    );
  }

  return (
    <main className='flex flex-col items-center justify-center w-full h-screen gap-y-4'>
      <button
        className='flex flex-row items-center gap-x-2 bg-white-100 border-gray-800 border-[0.5px] border-opacity-30 text-black p-2 rounded shadow-md'
        onClick={signIn}
      >
        <FcGoogle /> Login with Google
      </button>
      {user.displayName && (
        <div className='flex flex-col items-center justify-center text-sm'>
          <h5>
            Logged in as <strong>{user.displayName}</strong>
          </h5>
          <p>({user.email})</p>
        </div>
      )}
    </main>
  );
}
