import { set } from "mongoose";
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { CategoryContext } from "../context/CategoryContext";
import { VideoContext } from "../context/VideoContext";

function AddVideoView () {
    const { singleVideo, setSingleVideo, createVideo } = useContext(VideoContext);
    const { category } = useContext(CategoryContext);
    const navigate = useNavigate();

    useEffect(() => {
        setSingleVideo({
            url: "",
            category: "",
            notes: ""
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
        setSingleVideo({
            ...singleVideo
        });
        createVideo(singleVideo);
        setSingleVideo({
            url: "",
            category: "",
            notes: ""
        })
        //navigate("/") TODO: navigate to category view
    }

    return (
        <div>
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
                    name = "category"
                />
            </form>
        </div>
    )
}

export default AddVideoView;