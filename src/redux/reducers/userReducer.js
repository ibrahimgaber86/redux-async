import { actions } from "../actions/userActions";

const intitialState = {
  loading: false,
  users: [],
  error: "",
};

export default function userReducer(state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.FETCH_USERS:
      return { ...state, loading: true };
    case actions.FETCH_USERS_SUCCEES:
      return { ...state, loading: false, users: payload.users, error: "" };
    case actions.FETCH_USERS_FAILED:
      return { ...state, loading: false, users: [], error: payload.error };
    default:
      return state;
  }
}
