import { createContext, useEffect, useState, useContext } from "react";
import apiHelper from "../helpers/apiHelper";
import { AuthContext } from "./AuthContext";

export const CategoryContext = createContext({});

function CategoryProvider ({children}) {
    const jwt_string = 'jwtpintok';
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({
        name: "",
        image: ""
    })
    
    const { loggedIn } = useContext(AuthContext)
    

    useEffect(() => {
        if (loggedIn) {
            getAllCategoriesByUser()
        } else {
            getAllCategories();
        }
    }, [])

    const getAllCategories = async () => {
        const response = await apiHelper.get("/categories");
        setCategories(response.data)
    }

    const getAllCategoriesByUser = async () => {
        alert("reached")
        const { user } = JSON.parse(localStorage.getItem(jwt_string))
        try {
            const response = await apiHelper.get(`/categories/${user._id}`);
            setCategories(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCategoryById = async (id) => {
        try {
            const response = await apiHelper.get(`/categories/category/${id}`);
            setCategory(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createCategory = async (obj) => {
        let { user } = JSON.parse(localStorage.getItem(jwt_string))
        obj.user = user._id;
        const response = await apiHelper.post("/categories/category", obj)
        getAllCategories()
    }

    const updateCategory = async (id) => {
        let {user} = JSON.parse(localStorage.getItem(jwt_string))
        //if (obj.user._id !== user._id) return;
        const response = await apiHelper.put(`/categories/category/${id}`);
        getAllCategories();
    }

    const deleteCategory = async (id) => {
        await apiHelper.delete(`/categories/category/${id}`);
        getAllCategories();
    }
    
    return (
        <CategoryContext.Provider
            value={{
                categories,
                category,
                getCategoryById,
                createCategory,
                deleteCategory,
                setCategory,
                updateCategory,
                getAllCategoriesByUser,
                getAllCategories
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;