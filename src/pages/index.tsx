import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideBar from '../../layout/sidebar'
import NestedSideBar from '../../layout/nestedsidebar'
import { Avatar, Box, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import Chatbox from '../../layout/chatbox'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <Box sx={{display:"flex" ,height:"100vh",width:"100vw"}}>
     
    <SideBar />
  {/* <Box sx={{backgroundColor:"green",width:"6%"}}>fdf</Box> */}
  <Box sx={{backgroundColor:"#F6F7FB",width:"472px"}}>
    {/* <Stack sx={{boxShadow:" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}> */}
      
    <Typography sx={{color:"black",fontWeight:"500",fontSize:"19px",display:"flex",pt:4,pl:5}}>
     Chats
    </Typography>
    
   <List sx={{}}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem sx={{display:"flex",justifyContent:"center"}} key={text} disablePadding>
              <ListItemButton  sx={{display:"flex",justifyContent:"Center",py:0,my:1,pr:0 }} >
             <Box sx={{height:"90px" ,width:"372px",borderRadius:"12px",backgroundColor:"#fff"  }}>
             <Avatar>H</Avatar>

                <ListItemText  primary={text} />
             </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
          {/* </Stack> */}
     </Box>
  {/* <Box sx={{backgroundColor:"#F6F7FB",width:"72px", borderRight:"0.6px solid #36D6CA",borderLeft:"0.6px solid #36D6CA"}}> this is 1 st</Box> */}
  <Box sx={{backgroundColor:"#F6F7FB",width:"65%"}}>    
  <Chatbox> Something</Chatbox>
        </Box> 
  
      

        
      {/* <NestedSideBar>
        
        Something
      </NestedSideBar> */}
  
      </Box>
    </>
  )
}
