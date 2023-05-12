import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import IconBox from './component/IconBox';



const SideBar=({
  
})=> {
  return (
    <Box sx={{ backgroundColor:"#36D6CA", width:"100px",  
     boxShadow: " 10px 12px 14px 10px rgba(0, 0, 0, 0)",
    
     }}>
      <Typography sx={{display:"flex", justifyContent:"center",fontWeight:"450px",fontSize:"17px",pt:3}}>
        Chat ON
      </Typography>
     
    
       
        <List   sx={{
        backgroundColor:"58ECFC"
      
        }}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem sx={{display:"flex",justifyContent:"center",backgroundColor:"58ECFC"}} key={text} disablePadding>
              <ListItemButton  sx={{ display:"flex",justifyContent:"Center" ,py:2,backgroundColor:"58ECFC",}} >
                {/* <ListItemIcon sx={{display:"flex",justifyContent:"center"}}>

                <AcUnitIcon/>
                </ListItemIcon> */}
                <IconBox/>
             
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      

   
    </Box>
  );
}
export default SideBar