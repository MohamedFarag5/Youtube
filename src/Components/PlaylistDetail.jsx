import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";


import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchFromAPI } from "./utils/FetchFromApi";
import Loader from "./Loader";

const ChannelDetail = () => {
  const [playlistDetail, setPlaylistDetail] = useState();
  const [videos, setVideos] = useState([]);
  const [loading, setloading] = useState(false);

  const { playlistid} = useParams();

  useEffect(() => {
    setloading(false);
    const fetchResults = async () => {
      const data = await fetchFromAPI(`playlists?part=snippet&id=${playlistid}`);

      setPlaylistDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`playlistItems?playlistId=${playlistid}&part=snippet`);

      setVideos(videosData?.items);
      setloading(true);
    };

    fetchResults();
  }, [playlistid]);

  return (
    <Box minHeight="95vh">
      
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '10px' } }}/>
      {loading ?  <Videos videos={videos} />:<Loader/>}
      </Box>
    </Box>
  );
};

export default ChannelDetail;