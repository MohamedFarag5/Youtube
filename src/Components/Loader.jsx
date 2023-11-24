import { Grid, Skeleton } from '@mui/material'
import React from 'react'

function Loader({list}) {
  return <>
  
 {list !="ok"? <Grid container spacing={2} mt={5} ml={2}>
   {Array(50).fill(0).map((ite,index)=>{
    return <Grid xs={12} sm={6} md={4} key={index} >
    <Skeleton sx={{ backgroundColor:"gray",height:"170px",width:"90%" }} animation="wave" variant="rectangular" />
    <Skeleton variant="text" animation="wave" height={20}  sx={{ marginBottom: 1,marginTop:2,backgroundColor:"gray",marginRight:6 ,width:"80%"}} />
    <Skeleton variant="text" animation="wave" height={20}  sx={{ marginBottom: 6,backgroundColor:"gray",marginRight:6 ,width:"80%"}} />
   
           </Grid>
   })}
 
  </Grid>: <Grid container spacing={2} mt={5} ml={2}>
   {Array(50).fill(0).map((ite,index)=>{
    return <Grid xs={12}  key={index} >
    <Skeleton sx={{ backgroundColor:"gray",height:"170px",width:"90%" }} animation="wave" variant="rectangular" />
    <Skeleton variant="text" animation="wave" height={20}  sx={{ marginBottom: 1,marginTop:2,backgroundColor:"gray",marginRight:6 ,width:"80%"}} />
    <Skeleton variant="text" animation="wave" height={20}  sx={{ marginBottom: 6,backgroundColor:"gray",marginRight:6 ,width:"80%"}} />
   
           </Grid>
   })}
 
  </Grid>}
  
  </>
}

export default Loader
