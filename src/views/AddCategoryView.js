import {useEffect, useNavigate} from 'react'
import { useContext } from "react"
import { CategoryContext } from "../context/CategoryContext"

const CreateCategoryView = () => {
    const { category, setCategory, createCategory} = useContext(CategoryContext)
    const navigate = useNavigate();

    useEffect(() => {
        setCategory({
            name: "",
            image: ""
        })
    }, []);

    const handleChange = (event) => {
        setCategory({
            ...category,
            [event.target.name]: event.target.value
        });
        console.log(category)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setCategory({
            ...setCategory
        });
        createCategory(category);
        setCategory({
            name: "",
            image: ""
        });
        navigate("/")
    }

    return (
        <div>
            <form className="form">
                <h2>Add Category</h2>
                <input
                    name="name"
                    value={category.name}
                    onChange={handleChange}
                    className='form-control'
                    type="text"
                    placeholder='category name'
                />
                <input
                    name="image"
                    value={category.image}
                    onChange={handleChange}
                    className='form-control'
                    type="text" //TODO img type
                    placeholder='image'
                />
                <button
                    onClick={handleSubmit}
                    className='btn form-control'
                >
                    add category
                </button>
            </form>
        </div>
    )
}

export default CreateCategoryView