//need:
//category/:id
//all videos related to that category

import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { AuthContext } from "../context/AuthContext";
import { CategoryContext } from "../context/CategoryContext";
import { VideoContext } from "../context/VideoContext";

function SingleCategoryView() {
  const { category, getCategoryById } = useContext(CategoryContext);
  const { videos, getAllVideos } = useContext(VideoContext);
  const { loggedIn } = useContext(AuthContext)
  const { id } = useParams();

  useEffect(() => {
    getCategoryById(id);
    getAllVideos(id);
  }, []);

  return (
    <div className="singleCatview">
      <div className="addVideoBtn">
        <h4>Category: {category.name}</h4>
        <div className="btns">
        {
          loggedIn && 
          <>
          <Link to={`/addVideo/${id}`} className="btn">
            Add Video
          </Link>
          <span> </span>
          <Link to={`/editCategory/${id}`} className="btn">
            Edit category
          </Link>
          </>

        }
         
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          {videos.length === 0 && <h2>No videos in library</h2>}

          {videos.map((video) => (
            <div style={{margin: '20px auto'}} className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={video._id}>
              <VideoCard obj={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleCategoryView;
