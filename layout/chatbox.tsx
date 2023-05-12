import { Avatar, Box } from '@mui/material'
import React from 'react'
interface props{
    children:React.ReactNode
}

const Chatbox:React.FC<props> = ({
    children
}) => {
  return (
   <Box sx={{height:"560px",backgroundColor:"#fff",width:"800px",mt:3,ml:3,boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",borderRadius:"10px"}}>
    <Box sx={{width:"800px",height:"90px",backgroundColor:"#36D6CA",borderRadius:"10px"}}>
    <Avatar>H</Avatar>
    </Box>

    {children}
   </Box>
  )
}

export default Chatbox