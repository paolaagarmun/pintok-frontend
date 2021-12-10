import { createContext, useEffect, useState } from "react";
import apiHelper from '../helpers/apiHelper'

export const VideoContext = createContext({});

function VideoProvider ({children}) {
    const jwt_string = 'jwtpintok';
    const [videos, setVideos] = useState([]);
    const [singleVideo, setSingleVideo] = useState({
        url: "",
        category: "",
        notes: ""
    })

    useEffect(() => {
        getAllVideos()
    }, []);
    
    const getAllVideos = async () => {
        const response = await apiHelper.get("/tiktoks")
        setVideos(response.data);
    }

    const getVideoById = async (id) => {
        const response = await apiHelper.get(`/tiktoks/video/${id}`);
        setSingleVideo(response.data)
    }

    const createVideo = async (obj) => {
        let { user } = JSON.parse(localStorage.getItem(jwt_string));
        obj.user = user._id;
        const response = await apiHelper.post("/tiktoks/video", obj);
        getAllVideos();
    }

    const updateVideo = async (id, obj) => {
        let { user } = JSON.parse(localStorage.getItem(jwt_string));
        if (obj.user._id !== user._id) return;
        const response = await apiHelper.put(`/tiktoks/video/${id}`, obj);
        getAllVideos()
    }

    const deleteVideo = async (id) => {
        await apiHelper.delete(`/tiktoks/video/${id}`);
        getAllVideos();
    }

    return (
        <VideoContext.Provider
            value={{
                videos,
                singleVideo,
                getVideoById,
                createVideo,
                updateVideo,
                deleteVideo,
                setSingleVideo
            }}
        >
            {children}
        </VideoContext.Provider>
    )
}

export default VideoProvider;