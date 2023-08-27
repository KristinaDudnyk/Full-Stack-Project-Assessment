import React, { useEffect, useState } from "react";
import VideosCard from "./VideosCard";

export default function VideosPerent({ refreshVideos, setRefreshVideos }) {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://kristinadudnyk-fullstack-project.onrender.com/video"
      );
      const data = await response.json();
      console.log("fetchData in Videos", data);

      setVideos(data);
    } catch (error) {
      console.log("The ERROR occured in fetchData in Videos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshVideos]);

  return (
    <div className="videos-container">
      <VideosCard videos={videos} />
    </div>
  );
}
