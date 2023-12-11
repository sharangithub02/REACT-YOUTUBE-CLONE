import React from 'react'
 import {Typography,Card,CardContent,CardMedia} from '@mui/material'
 import {CheckCircle} from '@mui/icons-material'

import {demoThumbnailUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle,demoVideoUrl} from '../Utils/constant'
import { Link } from 'react-router-dom'

const VideoCard = ({video :{ id: {videoId} , snippet }}) => {
  return (
    <Card sx={{width:{xs:'100%', sm:'358px', md:'320px'},boxShadow:'none',borderRadius:0}}>
        <Link to={videoId?`/video/${videoId}` : demoVideoUrl} >
        <CardMedia 
        image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title}
        sx={{
            width:{
            xs:'100%',
            sm:'358px',
            md:'320px'
        }, height:180}}
        />
        </Link> 
        
        <CardContent sx={{backgroundColor:'white', height:'106px'}}>
            <Link to={videoId ? `/video/ ${videoId}` :demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='black'>
                    {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/ ${snippet?.channelId}`:demoChannelUrl}>
                <Typography variant='subtitle2' color='grey' fontWeight='bold'>
                    {snippet?.channelTitle?.slice(0,50) || demoChannelTitle.slice(0,50)}
                    <CheckCircle sx={{fontSize:12,color:'grey',ml:'5px'}} />
                </Typography>   
            </Link>
        </CardContent>  
    </Card>
  )
}

export default VideoCard;
