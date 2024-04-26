

import { getAuth } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useState } from "react";
const auth = getAuth(app);
const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {


    }

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;