import React, { useState, useEffect } from "react";

import axios from "axios";
const JokesFetched = () => {
  const [data, setData] = useState([]);
  const [punch, setPunch] = useState("");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://official-joke-api.appspot.com/jokes/programming/random"
      );
      setData(result.data[0]);
      setTimeout(() => {
        setReady(true);
        //console.log("isside", data.punchline);
      }, 3000);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("isside", punch);
    setPunch(data.punchline);
  }, [ready]);
  console.log("outsside", data.punchline);

  //console.log("outside", punch);

  //punchLine();
  //console.log("data", data);
  const joke = data;
  //console.log("data2", joke);
  if (!joke) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <div>
        <p>{joke.setup}</p>
        <p>{punch}</p>
      </div>
    );
  }
};

export default JokesFetched;
