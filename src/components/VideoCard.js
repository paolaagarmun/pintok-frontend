import { TikTok } from "react-tiktok";
import { Card } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { VideoContext } from "../context/VideoContext";
import { useNavigate } from "react-router-dom";

function VideoCard({ obj }) {
  const { deleteVideo } = useContext(VideoContext);
  const navigate = useNavigate();

  const handleDelete = async (event) => {
    event.preventDefault();
    let choice = window.confirm("Are you sure?");
    if (!choice) return;
    await deleteVideo(obj._id);
    navigate("/")
  }
  return (
    <Card style={{ width: "25rem"}}>
      <Card.Body>
        <Card.Text>{obj.notes}</Card.Text>
        <button
          onClick={handleDelete}
          className="btn"
        >
          delete tiktok
        </button>

        {obj.url ? <TikTok url={obj.url} /> : <h4>No video url</h4>}
        
      </Card.Body>
    </Card>
  );
}

export default VideoCard;
