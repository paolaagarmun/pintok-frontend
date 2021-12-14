//need:
//category/:id
//all videos related to that category

import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { CategoryContext } from "../context/CategoryContext";
import { VideoContext } from "../context/VideoContext";

function SingleCategoryView () {
    const {category, setCategory, getCategoryById} = useContext(CategoryContext)
    const { videos, video, getAllVideos } = useContext(VideoContext)
    const { id } = useParams();

    useEffect( () => {
        getCategoryById(id);
        getAllVideos(id);
    }, [])

    return (
        <div className="singleCatview">
            <div className="addVideoBtn">
            <h4>Category: {category.name}</h4>
                <div className="btns">
                    <Link
                        to={`/addVideo/${id}`} 
                        className="btn"
                    >
                    Add Video
                    </Link>
                    <span>   </span>
                    <Link
                        to={`/editCategory/${id}`} 
                        className="btn"
                    >
                        Edit category
                    </Link>
                </div>
                
            </div>
            <div className="container mt-5 categoryview">
                <div className="container">
                    { videos.length === 0 && (
                        <h2>No videos in library</h2>
                    )}
                    <div className="row">
                        { videos.map(video => (
                            <div key={video._id} >
                                <VideoCard obj={video}/>
                            </div>
                        ))} 
                    </div>

                </div>
            </div>
    
        </div>
        
    )
    
}

export default SingleCategoryView