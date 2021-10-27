import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { Collapse, ListItemButton } from "@mui/material";
const NavBarResponsive = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openList, setOpenList] = React.useState(false)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListClick = (event) => {
    setOpenList(!openList)
  }



  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Approach</MenuItem>
        <MenuItem onClick={handleClose}>Team</MenuItem>
        <MenuItem onClick={handleClose}>Achievements</MenuItem>
        <MenuItem onClick={handleClose}>Media</MenuItem>
        <List>
          {" "}
          <ListItemButton onClick={handleListClick}>
            Training 
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem sx={{pl:4}}>
                  Classes
                </ListItem>
              </List>
            </Collapse>
          </ListItemButton>
        </List>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </div>
  );
};

export default NavBarResponsive;
