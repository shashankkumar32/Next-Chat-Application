import { Box } from '@mui/material'
import React from 'react'
interface props{
    children:React.ReactNode
}

const Chatbox:React.FC<props> = ({
    children
}) => {
  return (
   <Box sx={{height:"100vh"}}>
    <Box sx={{width:"100vw",height:"10vh",backgroundColor:"black"}}>


    </Box>
    <Box sx={{display:"flex",}}>
        <Box sx={{width:"30px",height:"90vh",backgroundColor:"black"}}>

        </Box>
        <Box>
    {
        children
    }

        </Box>

    </Box>
    
   </Box>
  )
}

export default Chatbox