import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Typography } from '@mui/material'

import { useParams } from 'react-router-dom'

import {fetchFromAPI} from'../Utils/FetchFromApi'

import Videos from './Videos'


const Feed = () => {

  const [videos, setVideos] = useState([])

  const {searchTerm}=useParams()


  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm])


  return (

    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}> 
    <Typography variant='h5'
    fontWeight='bold' mb={2} sx={{color:'black'}}
    >
    Searched Result for  <span style={{color:'red'}}>{" "}{searchTerm}</span> Videos
    </Typography>

    <Videos  video={videos} />
  </Box>
  )
}

export default Feed
