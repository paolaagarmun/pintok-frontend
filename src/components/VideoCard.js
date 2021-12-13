import { TikTok } from "react-tiktok";
import { Card } from "react-bootstrap";
import { useEffect } from "react";

function VideoCard({ obj }) {
  //const imgUrl = "https://www.tiktok.com/@krmoji/video/7040826708429163781?lang=en&is_copy_url=1&is_from_webapp=v1";
  return (
    <Card style={{ width: "25rem"}}>
      <Card.Body>
        <Card.Text>{obj.notes}</Card.Text>

        {obj.url ? <TikTok url={obj.url} /> : <h4>No video url</h4>}
      </Card.Body>
    </Card>
  );
}

export default VideoCard;
