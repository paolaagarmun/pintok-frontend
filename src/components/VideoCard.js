import { TikTok } from "react-tiktok";
import { Card } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { VideoContext } from "../context/VideoContext";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function VideoCard({ obj }) {
  const { deleteVideo } = useContext(VideoContext);
  const { loggedIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async (event) => {
    event.preventDefault();
    let choice = window.confirm("Are you sure?");
    if (!choice) return;
    await deleteVideo(obj._id);
    navigate(`/singleCategoryView/${id}`)
  }
  return (
    <Card style={{ width: "22rem", margin: '0 auto'}} className="videoCard">
      <Card.Body>
        <Card.Text>{obj.notes}</Card.Text>
        
        {loggedIn && <button onClick={handleDelete} className="btn"> delete tiktok</button> }
        

        {obj.url ? <TikTok url={obj.url} /> : <h4>No video url</h4>}
        
      </Card.Body>
    </Card>
  );
}

export default VideoCard;
