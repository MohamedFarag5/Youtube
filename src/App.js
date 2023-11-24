import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import ChannelDetail from "./Components/ChannelDetail";
import Search from "./Components/Search";
import PlaylistDetail from './Components/PlaylistDetail.jsx';
import Notfound from "./Components/Notfound.jsx";

function App() {

  
  return <>
  <BrowserRouter>
  <Box sx={{backgroundColor:"black"}} >
    <Navbar/>
 
  <Routes>
    <Route path="/" exact element={<Feed/>}/>
    <Route path="/video/:id"   element={<VideoDetail/>}/>
    <Route path="/channel/:id"   element={<ChannelDetail/>}/>
    <Route path="/search/:searchTerm"   element={<Search/>}/>
    <Route path="/playlist/:playlistid"   element={<PlaylistDetail/>}/>
    <Route path="*"   element={<Notfound/>}/>
  </Routes>
  </Box>
  </BrowserRouter>
  </>
}

export default App;
