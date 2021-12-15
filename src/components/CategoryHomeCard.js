import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from '../images/new-york-best-cities-new-york-city.jpeg'

function CategoryHomeCard ({obj}) {
    return (
        <Card style={{ width: '15rem' }} className="categoryHomeCard">
            <Card.Body style={{height: "20rem"}}>
            <Card.Img variant="top" src={obj.image} style={{height: "10rem"}} className="imageCat"/>
            <Link to={`/singleCategoryView/${obj._id}`} className="btn form-control">
              {obj.name}
            </Link>
            </Card.Body>
        </Card>
    )
}

export default CategoryHomeCard;