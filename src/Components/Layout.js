import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "../App.css";
const useStyles = makeStyles({
  root: {
    Width: 575,
    height: 350,
    backgroundColor: "#8FEFAD",
    border: "solid black 0.2px",
    boxShadow: "1px 1px rgba(150,250,25,0.)",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Layout(newData) {
  const classes = useStyles();
  const { setup, punch } = newData;

  return (
    <Card className={classes.root}>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginTop: "6%" }}
        className="fnt"
      >
        {setup}
      </Typography>

      <Typography
        variant="h4"
        component="h2"
        style={{ marginTop: "9%" }}
        className="fnt"
      >
        {punch}
      </Typography>
    </Card>
  );
}

export default Layout;
