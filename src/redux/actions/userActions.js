import axios from "axios";

const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCEES = "FETCH_USERS_SUCCEES";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

function fetchUsers() {
  return { type: FETCH_USERS };
}
function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCEES, payload: { users } };
}
function fetchUsersFailed(error) {
  return { type: FETCH_USERS_FAILED, payload: { error } };
}

function getUsers(url) {
  return async (dispatch) => {
    dispatch(fetchUsers());
    try {
      const res = await axios.get(url);
      dispatch(fetchUsersSuccess(res.data));
    } catch (error) {
      dispatch(fetchUsersFailed(error));
    }
  };
}

export default {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailed,
  getUsers,
};

export const actions = { FETCH_USERS, FETCH_USERS_SUCCEES, FETCH_USERS_FAILED };
