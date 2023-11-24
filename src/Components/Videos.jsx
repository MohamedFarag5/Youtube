import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import PlaylistCard from './PlaylistCard';


function Videos({videos,direction}) {

  return <>
  {direction =="list"?  <Grid container spacing={2}>
    {videos?.map((item, idx)=>{
        return  <Grid xs={12} sm={6} lg={12} key={idx}>
         {item.id.videoId && <VideoCard video={item} relatedList={"ok"}/>}
         {item.id.channelId && <ChannelCard channelDetail={item} />}
         {item.id.playlistId && <PlaylistCard playlist={item} />}
         {item.id && <VideoCard video={item} playlist={"ok"} />}

        </Grid>
 
    })}</Grid>:  <Grid container spacing={2} >
    {videos.map((item, idx)=>{
        return  <Grid xs={12} sm={6} md={4} key={idx}>
         {item.id.videoId && <VideoCard video={item} />}
         {item.id.channelId && <ChannelCard channelDetail={item} />}
         {item.id.playlistId && <PlaylistCard playlist={item} />}
         {item.id && <VideoCard video={item} playlist={"ok"} />}
   
        </Grid>
 
    })}</Grid>}
 
  
  </>
}

export default Videos
