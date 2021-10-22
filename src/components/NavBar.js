import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography align='left'  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PropertyQuants
          </Typography>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">APPROACH</Button>
          <Button color="inherit">TEAM</Button>
          <Button color="inherit">ACHIEVEMENTS</Button>
          <Button color="inherit">MEDIA</Button>
          <Button color="inherit">TRAINING</Button>
          <Button color="inherit">CONTACT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
