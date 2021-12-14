import { createContext, useEffect, useState } from "react";
import apiHelper from "../helpers/apiHelper";

export const CategoryContext = createContext({});

function CategoryProvider ({children}) {
    const jwt_string = 'jwtpintok';
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({
        name: "",
        image: ""
    })

    useEffect(() => {
        getAllCategories();
    }, [])

    const getAllCategories = async () => {
        const response = await apiHelper.get("/categories");
        setCategories(response.data)
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
        if (obj.user._id !== user._id) return;
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
                updateCategory
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;