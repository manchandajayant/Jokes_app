import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import "../App.css";
import { showAlljokes } from "../Actions/jokeActions";

const JokesFetched = () => {
  const [data, setData] = useState([]);
  const [punch, setPunch] = useState("");
  const [setup, setSetup] = useState("");
  const [ready, setReady] = useState(false);
  const jokes = useSelector((state) => state.jokes);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const result = await axios(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );

    setData(result.data[0]);
    setSetup(result.data[0].setup);
    setTimeout(() => {
      setReady(true);
    }, 3000);
  };

  useEffect(() => {
    fetchData();
    dispatch(showAlljokes());
  }, [dispatch]);

  useEffect(() => {
    setPunch(data.punchline);
  }, [ready]);

  const reFetch = () => {
    setData([]);
    setSetup("");
    setPunch("");
    setReady(false);
    fetchData();
  };
  const myArray = ["Like it?", "How about this one?", "ha ha ha ha", "lol"];

  const randomItem = myArray[Math.floor(Math.random() * myArray.length)];

  const newData = { setup, punch };
  if (!data) {
    return (
      <div style={{ marginBottom: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: "50px" }}>Loading....</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Typography variant="h4" style={{ justifyContent: "center" }}>
          Joke generator
        </Typography>
        <Grid
          container
          spacing={4}
          style={{
            marginLeft: "7%",
            marginTop: "10%",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={10}>
            <Layout {...newData} />
            {punch ? (
              <Typography variant="h5" className="fnt">
                {randomItem}
              </Typography>
            ) : (
              <p></p>
            )}
            <Button onClick={reFetch}>click here to get more</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default JokesFetched;
