import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryHomeCard ({obj}) {
    //const {category} = useContext(CategoryContext)
    console.log(obj)
    return (
        <Card style={{ width: '15rem' }} className="categoryHomeCard">
            <Card.Body style={{height: "20rem"}}>
            <Card.Img variant="top" src={obj.image} style={{height: "10rem"}} className="imageCat"/>
            <Link to={`/singleCategoryView/${obj._id}`} className="btn form-control">
              <b>{obj.name}</b> by {obj.user?.name}
            </Link>
            </Card.Body>
        </Card>
    )
}

export default CategoryHomeCard;