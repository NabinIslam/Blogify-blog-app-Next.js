'use client';

import app from '@/firebase/firebase.config';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth(app);

  //function for sign in with google
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

  //function for sign in with email and password
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  //function for sign up with email and password
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //function for updating user's profile
  const updateUserProfile = name =>
    updateProfile(auth.currentUser, {
      displayName: name,
    });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const value = { signInWithGoogle, user, signIn, signUp, updateUserProfile };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
