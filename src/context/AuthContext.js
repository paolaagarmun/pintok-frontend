import { createContext, useEffect, useState } from "react";
import apiHelper from "../helpers/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const jwt_string = "jwtpintok";
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    })

    useEffect(() => {
        checkedLogged()
    }, [])

    const checkedLogged = () => {
        const tokenValue = JSON.parse(localStorage.getItem(jwt_string));
        try {
            setUserName(tokenValue.user.name)
        } catch (error) {
            console.log(error)
        }
        return tokenValue ? setLoggedIn(true) : setLoggedIn(false);
    }

    const setLocalStorageToken = (data) => {
        localStorage.setItem(jwt_string, JSON.stringify(data));
    }

    const loginUser = async (obj) => {
        const response = await apiHelper.post("/auth/login", obj);
        if (response.data) {
            setLocalStorageToken(response.data);
            alert("logged in") //TODO change alert
            setLoggedIn(true);
            setUser({
                name: "",
                email: "",
                password: "",
                role: ""
            })
        }
    }

    const signUpUser = async (obj) => {
        const response = await apiHelper.post("/auth/signup", obj)
        if (response.data) {
            setLocalStorageToken(response.data);
            alert('Signed up and logged in') //TODO remove alert
            setLoggedIn(true);
            setUser({
                name: "",
                email: "",
                password: "",
                role: ""
            })
        }
    }

    const logOutUser = () => {
        localStorage.removeItem(jwt_string);
        setLoggedIn(false)
    }

    return (
        <AuthContext.Provider
            value={{
                loggedIn,
                userName,
                user,
                setUser,
                loginUser,
                logOutUser,
                signUpUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider