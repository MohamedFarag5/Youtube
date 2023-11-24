import { useState, useEffect } from "react";
import { Typography, Box, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";

import Videos from "./Videos";
import { fetchFromAPI } from "./utils/FetchFromApi";
import Loader from "./Loader";

const Search= () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(false);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
        setloading(true);

      })
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
     {loading? <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>: <Skeleton variant="text" animation="wave" height={60}  sx={{ marginBottom: 6,backgroundColor:"gray",marginLeft:6 ,marginTop:"10px",width:"50%"}} />
}
      <Box display="flex">
        <Box sx={{ mr: { sm: '10px' } }}/>
        {loading?<Videos videos={videos} />:<Loader/>}
      </Box>
    </Box>
  );
};

export default Search;
