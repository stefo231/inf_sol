import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Divider,
  Typography,
  Box,
  CardMedia,
  Card,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../images/avatar.jpg";
import logo from "../images/zdravkov_stefan_logo.png";
import Footer from "./Footer";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#354649",
  },
  manuSliderContainer: {
    width: "auto",
    height: "100%",
    background: "#354649",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#E0E7E9",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({ right: false });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.manuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => {
          return (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "#A3C6C4" }} />
            </IconButton>
            {/* <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography> */}
            <Card style={{ background: "transparent" }}>
              <CardMedia
                component="img"
                alt="Project 1"
                height="40"
                width="auto"
                image={logo}
              />
            </Card>

            <MobileRightMenuSlider
              onClose={toggleSlider("right", false)}
              anchor="right"
              open={state.right}
            >
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
