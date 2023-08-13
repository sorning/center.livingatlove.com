'use client'
import {createContext, useContext, useEffect, useState} from 'react'
import {auth} from '../../../../lib/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'
const AuthContext=createContext()

export function AuthContextProvider({children}) {
    const [loading,setLoading]=useState(false)
    const [currentUser, setCurrentUser]=useState()
    const signup=async (email,password)=>{return await createUserWithEmailAndPassword(auth,email,password) }
    const signin=async (email,password)=>{return await signInWithEmailAndPassword(auth,email, password) }
    const signout=async ()=>{return await signOut(auth) }
    const resetPassword=async (email)=>{return await sendPasswordResetEmail(auth, email) }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })
        return ()=>unsubscribe()
    },[])
    
    const value={
        currentUser,
        signup,
        signin,
        signout,
        resetPassword,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading&&children}
            <p>Context</p>
        </AuthContext.Provider>
    )
}
export const useAuthContext=()=>useContext(AuthContext)