import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";


import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchFromAPI } from "./utils/FetchFromApi";
import Loader from "./Loader";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const [loading, setloading] = useState(false);

  const { id} = useParams();

  useEffect(() => {
    setloading(false);

    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
      setloading(true);

    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
     {loading?  <ChannelCard channelDetail={channelDetail} marginTop="-93px" />:
     <Box className="skeleton-circle">
     <Skeleton variant="circular"  animation="wave" sx={{width:"180px",height:"180px",backgroundColor:"gray",borderRadios:"50%",margin:"auto"}}/>
     <Skeleton variant="text"  animation="wave" sx={{width:"100px",height:"20px",backgroundColor:"gray",borderRadios:"50%",margin:"auto",marginTop:"5px"}}/>
     <Skeleton variant="text"  animation="wave" sx={{width:"100px",height:"20px",backgroundColor:"gray",borderRadios:"50%",margin:"auto"}}/>
     </Box> 
        }
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '10px' } }}/>
     {loading? <Videos videos={videos} />:<Loader/>}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
