import { CssBaseline, Button, Stack, Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import userActions from "./redux/actions/userActions";

function App() {
  const dispatch = useDispatch();
  const URL = "https://jsonplaceholder.typicode.com/users";
  return (
    <div className='App'>
      <CssBaseline />
      <Navbar />
      <Stack
        spacing={3}
        direction={{ xs: "column", sm: "row" }}
        p={3}
        justifyContent='center'
        alignContent='center'
      >
        <Button
          onClick={() => dispatch(userActions.getUsers(URL))}
          variant='contained'
          color='success'
        >
          fetch users sucess
        </Button>
        <Button
          onClick={() => dispatch(userActions.getUsers(URL + "s"))}
          color='error'
          variant='contained'
        >
          fetch users failed
        </Button>
      </Stack>
      <UsersList />
    </div>
  );
}

export default App;
