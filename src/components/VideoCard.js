import { TikTok } from "react-tiktok";
import { Card } from "react-bootstrap";

function VideoCard({ obj }) {
    const imgUrl = "https://www.tiktok.com/@krmoji/video/7040826708429163781?lang=en&is_copy_url=1&is_from_webapp=v1";       
    return (

            <Card style={{ width: "36rem" }}>
            <Card.Body>
                <Card.Text>This will be the post notes</Card.Text>
                { imgUrl && (
                    <TikTok url={imgUrl} />
                )}
            </Card.Body>
            </Card>
    );
}

export default VideoCard;
