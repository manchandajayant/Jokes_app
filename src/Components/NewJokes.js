import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newJoke } from "../Actions/jokeActions";

const NewJokContainer = () => {
  const user = useSelector((state) => state.users);
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const dispatch = useDispatch();

  const data = { setup, punchline };
  const onSubmit = (joke) => {
    dispatch(newJoke(data));
  };
  console.log(newJoke());
  return (
    <div>
      Setup
      <input
        type="text"
        name="setup"
        placeholder="setup"
        onChange={(e) => setSetup(e.target.value)}
        value={setup}
      />
      Punchline
      <input
        type="text"
        name="punchline"
        placeholder="punchline"
        onChange={(e) => setPunchline(e.target.value)}
        value={punchline}
      />
      <button onClick={onSubmit}>CREATE</button>
    </div>
  );
};

export default NewJokContainer;
