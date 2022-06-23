import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";

/*
"id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
*/
function User({ user }) {
  const { name, email, address, username } = user;
  return (
    <Card elevation={6}>
      <CardHeader title={name} subheader={username} />
      <CardContent>
        <Typography>email:{email}</Typography>
        <Typography>address:{address?.city}</Typography>
      </CardContent>
    </Card>
  );
}

export default User;
