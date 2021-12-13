import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from '../images/new-york-best-cities-new-york-city.jpeg'

function CategoryHomeCard ({obj}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Img variant="top" src={img} />
            <Link to={`/singleCategoryView/${obj._id}`} className="btn btn-outline-dark">
              {obj.name}
            </Link>
            </Card.Body>
        </Card>
    )
}

export default CategoryHomeCard;