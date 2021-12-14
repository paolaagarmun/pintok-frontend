import { useContext } from "react";
import CategoryHomeCard from "../components/CategoryHomeCard";
import { CategoryContext } from "../context/CategoryContext";

function HomeView () {
    const { categories } = useContext(CategoryContext);
    return (
        <div className="container mt-5 homeview">
        {categories.map(category => (
            <CategoryHomeCard key={category._id} obj={category}/>
        ))}
        </div>
    )
}

export default HomeView;