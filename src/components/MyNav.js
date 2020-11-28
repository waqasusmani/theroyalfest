import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Cafeteria from "./Cafeteria";
import Catering from "./Catering";
import Home from "./Home";
import {Contact} from './Contact';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "./royal_fest_logo.png";
import EventManagement from "./EventManagement";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    // flexGrow: 1,
  },
}));

export default function MYNav() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar id="appToolBar">
              <img id="logo" src={logo}></img>
              <Typography variant="h6" className={classes.title}>
                <Link className="links" to="/">Home</Link>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <Link className="links" to="/eventmanagement">Event Management</Link>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <Link className="links" to="/catering">Catering</Link>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <Link className="links" to="/cafeteria">Cafeteria Services</Link>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <Link className="links" to="/contact">Contact Us</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cafeteria" component={Cafeteria} />
          <Route exact path="/catering" component={Catering} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/eventmanagement" component={EventManagement} />
        </switch>
      </Router>
      <Router></Router>
    </div>
  );
}
