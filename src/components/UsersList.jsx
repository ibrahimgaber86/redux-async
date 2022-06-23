import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function UsersList() {
  const users = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  return (
    (loading && (
      <h1 style={{ textAlign: "center", color: "red" }}>loading...</h1>
    )) ||
    (error && (
      <h1 style={{ textAlign: "center", color: "red" }}>{error.message}</h1>
    )) || (
      <Grid
        sx={{ px: 3, paddingTop: 2, paddingBottom: 6 }}
        container
        spacing={3}
      >
        {users.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
            <User key={user.id} user={user} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default UsersList;
