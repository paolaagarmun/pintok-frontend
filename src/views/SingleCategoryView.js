//need:
//category/:id
//all videos related to that category

import VideoCard from "../components/VideoCard";

function SingleCategoryView () {
    return (
        <div className="container mt-5 homeview">
            <VideoCard />
        </div>
    )
    
}

export default SingleCategoryView