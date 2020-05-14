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
      PRICE:
      <input
        type="text"
        name="price"
        placeholder="price"
        // onChange={(e) => setPrice(e.target.value)}
        // value={price}
      />
      DESCRIPTION
      <input
        type="text"
        name="description"
        placeholder="Description"
        // onChange={(e) => setDescription(e.target.value)}
        // value={description}
      />
      <button onClick={onSubmit}>CREATE</button>
    </div>
  );
};

export default NewJokContainer;
