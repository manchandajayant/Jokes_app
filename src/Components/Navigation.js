import React from "react";
import { Toolbar, Typography, AppBar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typoStyles: {
    flex: 1,
  },
}));
const Navigation = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "rgba(150,250,250,0.1)" }}
    >
      <Toolbar>
        <Typography className={classes.typoStyles} style={{ color: "#000000" }}>
          <Button href="/" style={{ color: "#000" }}>
            Homepage
          </Button>
        </Typography>
        <Button href="/jokelist" style={{ marginRight: "2%", color: "black" }}>
          Jokes by users
        </Button>

        <Button href="/new" style={{ marginRight: "2%", color: "black" }}>
          Add a Joke
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
