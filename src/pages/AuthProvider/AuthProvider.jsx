import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { createContext, useState } from "react";
import PropTypes from 'prop-types'; //

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        setUser,
        loading, 
        createUser,
    }

    return (
       <AuthContext.Provider value={userInfo}>
            {children}
       </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;