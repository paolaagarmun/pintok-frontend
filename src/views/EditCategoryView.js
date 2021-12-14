import { useContext, useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom"
import { CategoryContext } from "../context/CategoryContext"

function EditCategoryView () {
    const { category, setCategory, getCategoryById, deleteCategory,updateCategory} = useContext(CategoryContext);
    const { user } = JSON.parse(localStorage.getItem("jwtpintok"))
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCategoryById
    }, [])

    const handleChange = (event) => {
        setCategory({
            ...category,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateCategory(id)
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        let choice = window.confirm("Are you sure?");
        if (!choice) return;
        await deleteCategory(id);
        navigate("/")
    }

    return (
        <div className="container mt-5">
            <form className="form">
                <h3>Edit category: {category.name}</h3>
                <input
                    name="name"
                    value={category.name}
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    placeholder="name"
                />
                <input
                    name="image"
                    value={category.image}
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    placeholder="image"
                />  
                <button
                    onClick={handleSubmit}
                    className="btn form-control"
                >
                    Edit category
                </button> 
                <button
                    onClick={handleDelete}
                    className="btn form-control"
                >
                    Delete category
                </button>     
            </form>

        </div>
    )
}

export default EditCategoryView