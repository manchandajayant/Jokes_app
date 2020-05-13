import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import "../App.css";
const JokesFetched = () => {
  const [data, setData] = useState([]);
  const [punch, setPunch] = useState("");
  const [setup, setSetup] = useState("");
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await axios(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );

    setData(result.data[0]);
    setSetup(result.data[0].setup);
    setTimeout(() => {
      setReady(true);
    }, 3000);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setPunch(data.punchline);
  }, [ready]);

  const reFetch = () => {
    setData([]);
    setSetup("");
    setPunch("");
    setReady(false);
    setLoading(true);
    fetchData();
    console.log("data", data);
  };

  const newData = { setup, punch };
  if (loading) {
    return (
      <div style={{ marginBottom: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: "50px" }}>Loading....</h1>
      </div>
    );
  } else {
    return (
      <div>
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
            {punch ? <p class="fnt">Like it?</p> : <p></p>}
            <Button onClick={reFetch}>click here to get more</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default JokesFetched;
