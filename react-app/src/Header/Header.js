import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none",
  },
  appBarTitle: {
    flexGrow: 1,
    fontFamily: "Nunito",
    color: "black",
  },
  appBarWrapper: {
    width: "60%",
    margin: "0 auto",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  logo: {
    paddingTop: "1%",
    width: "0 auto",
    height: "0 auto",
    fontFamily: 'Montserrat, sans-serif'
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    paddingTop: "1%",
  },
  buttonStyle: {
    fontFamily: 'Montserrat',
    color: "#edf0f1",
    fontWeight: 400,
    transition: 'all 0.3s ease 0s',
    '&:hover': {
      color: '#0088a9'
    },
    '&:focus': {
      color: '#FFF'
    }
  },
  buttonLogin: {
    backgroundColor: "rgba(0,136,169,1)",
    color: "#FFF",
    fontFamily: "Montserrat",
    fontWeight: 600,
    marginLeft: "2%",
    '&:hover': {
      backgroundColor: "rgba(0,136,169,0.8)",
    }
  },
}));

const Header = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <h1 className={classes.logo} >
            RSPSNetwork
          </h1>
          <div className={classes.buttonContainer}>
            <Button className={classes.buttonStyle} href='/'>Home</Button>
            <Button className={classes.buttonStyle}>About</Button>
            <Button className={classes.buttonStyle}>Contact</Button>
            <Button className={classes.buttonStyle}>Toplist</Button>
            <Button className={classes.buttonLogin} href='/form-register'>Sign In / Register</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
