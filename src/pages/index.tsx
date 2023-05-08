import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideBar from '../../layout/sidebar'
import NestedSideBar from '../../layout/nestedsidebar'
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Chatbox from '../../layout/chatbox'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <Box sx={{display:"flex" ,height:"100vh",width:"100vw"}}>
     
    <SideBar />
  {/* <Box sx={{backgroundColor:"green",width:"6%"}}>fdf</Box> */}
  <Box sx={{backgroundColor:"#fff",width:"272px"}}>
    
   <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem sx={{display:"flex",justifyContent:"center"}} key={text} disablePadding>
              <ListItemButton  sx={{display:"flex",justifyContent:"Center" }} >
             
                <ListItemText  primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
     </Box>
  <Box sx={{backgroundColor:"#fff",width:"65%"}}>    
  {/* <Chatbox> Something</Chatbox> */}
        </Box>
  <Box sx={{backgroundColor:"red",width:"272px"}}> this is 1 st</Box>
  
      

        
      {/* <NestedSideBar>
        
        Something
      </NestedSideBar> */}
  
      </Box>
    </>
  )
}
