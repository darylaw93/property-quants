import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import NavBarResponsive from "./NavBarResponsive";
import { useMediaQuery } from "react-responsive";
import logo from "./images/property_quants_logo.png";
import { MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: 'inherit'
        },
      },
    },
  }));

  return (
    <Box>
      <AppBar
        position="static"
        style={{
          color: "black",
          fontWeight: "bold",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <Toolbar>
          <img src={logo} alt="logo" style={{ height: "50px" }} />
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {isDesktopOrLaptop && <Button color="inherit">ABOUT</Button>}
            {isDesktopOrLaptop && <Button color="inherit">APPROACH</Button>}
            {isDesktopOrLaptop && <Button color="inherit">TEAM</Button>}
            {isDesktopOrLaptop && <Button color="inherit">MEDIA</Button>}
            {isDesktopOrLaptop && (
              <Button
                color="inherit"
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                TRAINING
              </Button>
            )}
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Classes
              </MenuItem>
            </StyledMenu>
            {isDesktopOrLaptop && <Button color="inherit">CONTACT</Button>}
            {isTabletOrMobile && <NavBarResponsive />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
