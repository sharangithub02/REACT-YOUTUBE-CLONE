import React from 'react'
import {Box,CardContent,CardMedia,Typography} from '@mui/material';
import { CheckCircle} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../Utils/constant';

const ChannelCard = ({ channelDetail,marginTop }) =>{
  return(
    <Box sx={{
      boxShadow:'none',
      borderRadius:'20px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:{xs:'356px',md:'320px'},
     height:'326px',
     margin:'auto',
     marginTop,
    }}
    >   
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}} >
         <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius:'50%', width:'180px' , height:'180px' , mb:'1px', border:'1px solid grey'}}
          />
          <Typography variant='h6' sx={{color:'black'}}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,color:'grey',ml:'5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{color:'black'}}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
          </Link>
    </Box>
  )
}

export default ChannelCard;
