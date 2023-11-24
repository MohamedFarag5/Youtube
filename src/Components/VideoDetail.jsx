import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Skeleton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";
import { fetchFromAPI } from "./utils/FetchFromApi";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Loader from "./Loader";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(false);
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data?.items[0])
      }).catch((error)=>{
        console.log(error)
      });
      

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=> 
      {
        setVideos(data?.items);
        setloading(true);
      }).catch((error)=>{
        console.log(error)
      })
      
      
  }, [id]);

 if(!videoDetail?.snippet) return ;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return <>
   <Box minHeight="95vh">
    <Grid container>
    <Grid xs={12} lg={9}>
      {loading? <Box sx={{ width: "100%",position:"sticky" ,top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>:
          <Box sx={{ width: "100%",position:"sticky" ,top: "86px" }}>
          <Skeleton sx={{ backgroundColor:"gray",height:"70vh",width:"100%" }} animation="wave" variant="rectangular" />
          <Skeleton variant="text" animation="wave" height={20}  sx={{ marginBottom: 1,marginTop:2,backgroundColor:"gray",marginRight:6 ,width:"80%"}} />
          <Skeleton variant="text" animation="wave" height={20}  sx={{ marginBottom: 1,marginTop:2,backgroundColor:"gray",marginRight:6 ,width:"50%"}} />

          </Box>
}
          
        
        </Grid>


         <Grid sm={12} lg={3}>
        <Box px={2} py={{ md: 1, xs: 5 }}   >
         {loading ?<Videos videos={videos} direction={"list"}/>:
         
         <Loader list={"ok"}/>
         }
        </Box>
        </Grid>
    
    </Grid>
    </Box>
  </>};


export default VideoDetail;