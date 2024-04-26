

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";
// import {  } from "firebase/auth/cordova";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider
    ();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const authInfo = {
        user,
        setUser,
         signUp,
         logIn,
         logOut,
         googleLogin,
         githubLogin,
         loading,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return() => {
            unSubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;