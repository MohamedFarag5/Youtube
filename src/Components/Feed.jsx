import { Stack, Typography ,Box, Skeleton} from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from './utils/FetchFromApi';
import Loader from './Loader';

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);
    const [loading, setloading] = useState(false);
    
  useEffect(() => {
    setloading(false);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&order=date`)
      .then((data)=>
      {
      setVideos(data.items);
      setloading(true);
      })
    }, [selectedCategory]);
  return <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
  <SideBar  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
   {loading?   <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
      Copyright © 2022 JSM Media
        </Typography>:<Skeleton variant="rounded"  className="category-btn"  animation="wave" sx={{ backgroundColor:"gray",marginRight: "15px" }} />}
        </Box>
        
      <Box p={2} sx={{ overflowY: "auto", height: "90vh",flex:2 }}>
       {loading? <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>   {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
:<Skeleton variant="text"   animation="wave" sx={{ backgroundColor:"gray",width:"130px",height:"35px" }} />}

       {loading?<Videos videos={videos} />:<Loader/>}
      </Box>
  </Stack>
  
  
  </>
}

export default Feed
