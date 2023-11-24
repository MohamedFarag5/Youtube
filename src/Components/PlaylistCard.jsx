import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import demo from './utils/videonotfound.jpg';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants";

function PlaylistCard({ playlist: { id: { playlistId }, snippet } }) {
  return <>
  
  <Card sx={{ boxShadow: "none", borderRadius:0,marginTop:"15px"}}>
    <Link to={playlistId ? `/playlist/${playlistId}` : `/playlist/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demo} alt={snippet?.title} 
        sx={{ width: { xs: '100%',}, height: 180 }}/>
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
  
  </>
}

export default PlaylistCard
