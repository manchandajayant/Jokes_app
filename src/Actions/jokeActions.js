import request from "superagent";

export const JOKES_FETCHED = "JOKES_FETCHED";
export const NEW_JOKE = "NEW_JOKE";

const baseUrl = "http://localhost:4000";

const alljokesFetched = (jokes) => ({
  type: JOKES_FETCHED,
  payload: jokes,
});

export const showAlljokes = () => (dispatch, getState) => {
  const state = getState();
  const { jokes } = state;

  if (!jokes.length) {
    request(`${baseUrl}/joke`)
      .then((res) => {
        const action = alljokesFetched(res.body);
        dispatch(action);
        console.log("action", action);
      })
      .catch(console.error);
  }
};
const newJokeCreated = (jokes) => ({
  type: NEW_JOKE,
  payload: jokes,
});

export const newJoke = (data) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then((res) => {
      const action = newJokeCreated(res.body);
      dispatch(action);
    })
    .catch(console.error);
};
