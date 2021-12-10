import { Button, Card } from "react-bootstrap";
import img from '../images/new-york-best-cities-new-york-city.jpeg'

function CategoryHomeCard ({obj}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Img variant="top" src={img} />
                <Button variant="primary" className="form-control">{obj.name}</Button>
            </Card.Body>
        </Card>
    )
}

export default CategoryHomeCard;