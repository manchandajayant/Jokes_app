import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlljokes } from "../Actions/jokeActions";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    Width: 200,
    height: 100,
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
const Userjokelist = () => {
  const classes = useStyles();
  const jokes = useSelector((state) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAlljokes());
  }, [dispatch]);
  console.log(jokes);
  return (
    <div>
      {jokes.map((joke) => {
        return (
          <div>
            <Card classes={classes.root}>
              <Typography variant="h4" component="h2">
                {joke.setup}
              </Typography>

              <Typography variant="h4" component="h2">
                {joke.punchline}
              </Typography>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Userjokelist;
