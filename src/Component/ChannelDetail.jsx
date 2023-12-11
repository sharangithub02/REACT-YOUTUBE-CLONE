import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Box, Container} from '@mui/material';
import {fetchFromAPI} from '../Utils/FetchFromApi'
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = ({marginTop}) => {
  const [channeldetail, setChanneldetail] = useState(null);
  const [videos, setVideos] = useState([])

  const {id}=useParams();

  
  useEffect(()=>{

    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChanneldetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))

  },[id])
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div  style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(248,19,235,1) 46%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }} />
        <ChannelCard channelDetail={channeldetail} marginTop='-120px'  />
      </Box>
      <Box display='flex' p={2}>
        <Box sx={{mr:{sm:'100px'}}} / >
        <Videos video={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
