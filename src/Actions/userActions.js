import request from "superagent";

export const JWT = "JWT";
export const NEW_USER = "NEW_USER";
export const USER_FETCHED = "USER_FETCHED";

const baseUrl = "http://localhost:4000";

const userLogin = (payload) => ({
  type: JWT,
  payload,
});

export const login = (data) => (dispatch, getState) => {
  const state = getState();
  if (!state) {
    console.log("User does not exist");
  } else {
    request
      .post(`${baseUrl}/login`)
      .send(data)
      .then((res) => {
        const action = userLogin(res.body);
        dispatch(action);
        //console.log(res.body);
      })
      .catch(console.error);
  }
};

const newSignUp = (payload) => ({
  type: NEW_USER,
  payload,
});

export const signUpUser = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/signup`)
    .send(data)
    .then((res) => {
      const action = newSignUp(res.body);
      dispatch(action);
    })
    .catch(console.error);
};
