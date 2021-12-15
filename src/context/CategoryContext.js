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
        console.log(loggedIn)
        if (loggedIn) getAllCategoriesByUser();
        else getAllCategories()
    }, [])

    const getAllCategories = async () => {
        const response = await apiHelper.get("/categories");
        setCategories(response.data)
    }

    const getAllCategoriesByUser = async () => {
        try {
            console.log('before api call')
            const { user } = JSON.parse(localStorage.getItem(jwt_string))
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
        const {image, ...newCategory} = obj;
        const response = await apiHelper.post("/categories/category", newCategory)
        
        await imageCategoryUpload(response.data._id, image)
        getAllCategories()
    }

    const imageCategoryUpload = async (id, img) => {
        const formData = new FormData();
        formData.append('image', img);
        const response = await apiHelper.post(`/categories/category/imageUpload/${id}`, formData);
        getAllCategories();
    }

    const updateCategory = async (obj) => {
        let {user} = JSON.parse(localStorage.getItem(jwt_string))
        if (obj.user !== user._id) return;
        const {image, ...category} = obj;
        const response = await apiHelper.put(`/categories/category/${obj._id}`, category);
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
                getAllCategories,
                imageCategoryUpload
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;