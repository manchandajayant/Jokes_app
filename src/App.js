import React from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import JokesFetched from "./Components/Homepage";

function App() {
  return (
    <Grid
      container
      direction="column"
      style={{ backgroundColor: "rgba(150,250,250,0.9)", marginBottom: "0%" }}
    >
      <Grid item container style={{ marginTop: "5%", marginBottom: "20%" }}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <JokesFetched />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
