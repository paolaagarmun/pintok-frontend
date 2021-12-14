import { createContext, useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import apiHelper from "../helpers/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const { getAllCategoriesByUser, getAllCategories } = useContext(CategoryContext)
    const jwt_string = "jwtpintok";
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        checkedLogged()
    }, [])

    useEffect(() => {
        revalidateToken();
    }, [loggedIn])

    const checkedLogged = () => {
        const tokenValue = JSON.parse(localStorage.getItem(jwt_string));
        return tokenValue ? setLoggedIn(true) : setLoggedIn(false);
    }

    const setLocalStorageToken = (data) => {
        localStorage.setItem(jwt_string, JSON.stringify(data));
    }

    const loginUser = async (obj) => {
        try {
            const response = await apiHelper.post("/auth/login", obj)
            const { data } = response;
            setUser(data.user)
            setLocalStorageToken(data)
            setLoggedIn(true)
            getAllCategoriesByUser();
        } catch (error) {
            console.log(error)
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

    const revalidateToken = async () => {
        if (!loggedIn) return;
        try {
            const response = await apiHelper.post("/auth/renew");
            const { data } = response;
            setUser(data.user);
            setLocalStorageToken(data);
            setLoggedIn(true);
        } catch (error) {
            console.log(error)
        }
    }

    const logOutUser = () => {
        localStorage.removeItem(jwt_string);
        setLoggedIn(false)
        getAllCategories();
    }

    return (
        <AuthContext.Provider
            value={{
                loggedIn,
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