import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Stack,Typography } from '@mui/material'

import {fetchFromAPI} from'../Utils/FetchFromApi'

import Sidebar from './Sidebar'
import Videos from './Videos'


const Feed = () => {
  
  const [selectedcategory, setSelectedcategory] = useState('New');

  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedcategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedcategory])


  return (
    <Stack sx={{flexDirection: {sx:'column' ,md:'row'}   }}>
      <Box sx={{height:{sx:'auto',md:'92vh'},
      borderRight:'1px solid grey',px:{sx:0,md:2}}}>
        
       <Sidebar selectedCategory={selectedcategory} setSelectedcategory={setSelectedcategory} />

        <Typography className='copyright' variant='body2'sx={{mt:1.5,color:'black'}}>
          Copyright 2023 
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}> 
        <Typography variant='h5'
        fontWeight='bold' mb={2} sx={{color:'black'}}
        >
        {selectedcategory} <span style={{color:'red'}}>Videos</span>
        </Typography>

        <Videos  video={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
