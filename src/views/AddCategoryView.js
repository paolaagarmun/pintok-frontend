import {useEffect, useState} from 'react'

import { useContext } from "react"
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CategoryContext } from "../context/CategoryContext"

const CreateCategoryView = () => {
    const { category, setCategory, createCategory, imageCategoryUpload} = useContext(CategoryContext)
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false)
    

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
        //console.log(category)
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setCategory({
            ...category,
            image: imageFile
        });
        
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setCategory({
            ...setCategory
        });
         await createCategory(category);
        
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false),
            navigate("/")     
        }, 3000)
        setCategory({
            name: "",
            image: ""
        });
        
        
        //alert('category created')
        // navigate("/")
    };

    return (
        <div>
        { success && <Alert className='alert-success'>The category was created successfully!</Alert> }
            
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
                    onChange={handleImageChange}
                    className='form-control'
                    type="file" //TODO img type
                    accept="image/*"
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