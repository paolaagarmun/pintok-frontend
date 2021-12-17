import { useContext } from "react";
import CategoryHomeCard from "../components/CategoryHomeCard";
import { AuthContext } from "../context/AuthContext";
import { CategoryContext } from "../context/CategoryContext";

function HomeView () {
    const { loggedIn } = useContext(AuthContext);
    const { categories } = useContext(CategoryContext);
    return (
        <div className="homeviewFull">
            
        <div className="container mt-5 homeview ">
        
        

        {categories.length === 0 ?
            <h3>Go ahead and create your first category!</h3>
        :

        categories.map(category => (
            <CategoryHomeCard key={category._id} obj={category}/>
        ))

        }
        
        
        </div>
        </div>
        
    )
}

export default HomeView;