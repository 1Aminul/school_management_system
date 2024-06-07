import React,{createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

import app from '../../firebase.config'
import { useQuery } from '@tanstack/react-query';



const auth = getAuth(app)
export const AuthContext = createContext() 


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const { data: students = [], refetch } = useQuery({
        queryKey: ["students"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/studentInfo`);
          const data = await res.json();
          return data;
        },
      });
      

    const googleProvider = new GoogleAuthProvider()
    //google login
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    //create user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    //update user
    const ProfileUpdate = (name, url)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: url
        })
    }

    //Login
    const LogIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logOUt
    const LogOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe();
        
    }, [])

    const authinfo = {
        createUser,
        ProfileUpdate,
        LogIn, user, LogOut, loading, googleLogin, students
    }

    return (
       <AuthContext.Provider value={authinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;