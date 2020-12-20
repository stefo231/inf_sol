import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
// import avatar from "../images/avatar.jpg";
import avatar from "../images/avatar.jpg";

// CSS STYLES

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#A3C6C4",
  },
  subtitle: {
    color: "#E0E7E9",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Stefan Zdravkov"
          />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed
            strings={["Stefan Zdravkov"]}
            typeSpeed={40}
            backSpeed={60}
            // loop
          />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Web Development",
              "MERN Stack",
              "Mobile Development",
              "React Native",
              "Flutter",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    </>
  );
};

export default Header;
