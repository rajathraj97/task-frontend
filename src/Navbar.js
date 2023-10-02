import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,Route,Routes } from 'react-router-dom';
import Login from './Login';

const Navbar = () =>{
return(<div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TASK-MANAGER
          </Typography>
          <Link style={{textDecoration:"none",color:"white"}} to="/login"><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
</Box>

    <Routes>
        <Route path="/login" element={<Login/>}/>  
    </Routes>
    </div>

)
}


export default Navbar