  import React from 'react'
  import { Stack } from '@mui/material'
  import {categories} from '../Utils/constant'

  const Sidebar = ({selectedCategory,setSelectedcategory}) => {


    return (
      <Stack direction='row'
      sx={{overflowY:'auto',
      height:{sx:'auto',md:'95%'},
      flexDirection:{md:'column'},
      }}>
          {categories.map((category)=>(
              <button  onClick={()=>setSelectedcategory(category.name)}
              className='category-btn'
              style={{background:category.name===selectedCategory && 'red',color:'black'}} 
              key={category.name}>
                  <span  style={{color:category.name===selectedCategory ?'white':'red',marginRight:'10px'}}>{category.icon}</span>
                  <span style={{opacity:category.name===selectedCategory? 1 : 0.8}}>{category.name}</span>
              </button>
          ))}
      </Stack>
    )
  }

  export default Sidebar
