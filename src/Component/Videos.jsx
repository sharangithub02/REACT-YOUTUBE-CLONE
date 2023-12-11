import { Stack ,Box} from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({video,direction}) => {

  if(!video?.length) return 'Loading..'
  
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {video.map((item,index)=>(
            <Box key={index}>
                {item.id.videoId &&  <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos
