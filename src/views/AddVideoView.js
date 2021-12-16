import { useContext, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom'
import { CategoryContext } from "../context/CategoryContext";
import { VideoContext } from "../context/VideoContext";

function AddVideoView () {
    const { singleVideo, setSingleVideo, createVideo } = useContext(VideoContext);
    const { category } = useContext(CategoryContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setSingleVideo({
            url: "",
            notes: "",
            category: id
        })
    }, []);

    const handleChange = (event) => {
        setSingleVideo({
            ...singleVideo,
            [event.target.name]: event.target.value
        });
        console.log(singleVideo)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        createVideo(singleVideo);
        setSingleVideo({
            url: "",
            notes: ""
        })
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false),
            navigate(`/singleCategoryView/${id}`)     
        }, 3000)
         
    }

    return (
        <div>
        { success && <Alert className='alert-success'>The tiktok was uploaded successfully!</Alert> }

            <form className="form">
                <h2>Add a tiktok video:</h2>
                <input
                    name= "url"
                    value={singleVideo.url}
                    onChange={handleChange}
                    className="form-control"
                    type="url"
                    placeholder="add tiktok url"
                />
                <input
                    name= "notes"
                    value = {singleVideo.notes}
                    onChange={handleChange}
                    className="form-control"
                    type = "text"
                    placeholder="notes"
                />
                <button
                    className="form-control"
                    onClick={handleSubmit}
                    type="submit"
                >
                    add video
                </button>
            </form>
        </div>
    )
}

export default AddVideoView;