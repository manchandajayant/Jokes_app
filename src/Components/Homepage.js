import React, { useState, useEffect } from "react";

import axios from "axios";
const JokesFetched = () => {
  const [data, setData] = useState([]);
  const [punch, setPunch] = useState("");
  const [setup, setSetup] = useState("");
  const [ready, setReady] = useState(false);
  useEffect(() => {
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
    fetchData();
  }, []);

  useEffect(() => {
    setPunch(data.punchline);
  }, [ready]);

  if (!data) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <div>
        <p>{setup}</p>
        <p>{punch}</p>
      </div>
    );
  }
};

export default JokesFetched;
