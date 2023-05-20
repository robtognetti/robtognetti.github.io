// 'use client';
// import { useState, useContext, createContext, useEffect } from 'react';
// import {
//   onAuthStateChanged,
//   getAuth,
// } from 'firebase/auth';
// import firebase_app from '@/firebase/config';

// export const AuthContext = createContext({} as AuthContextType);
// export const useAuth = () => useContext(AuthContext);

// export default function AuthContextProvider({ children }: any) {
//   const auth = getAuth(firebase_app);
//   const [user, setUser] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (res): any => {
//       if (res) setUser(res);
//       else setUser('');
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, [])

//   return <AuthContext.Provider value={ { user } }>{ children } </AuthContext.Provider>;

// };