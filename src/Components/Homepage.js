import React, { useState, useEffect } from "react";

import axios from "axios";
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

  if (loading) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <div>
        <p>{setup}</p>
        <p>{punch}</p>
        <button onClick={reFetch}>click</button>
      </div>
    );
  }
};

export default JokesFetched;
