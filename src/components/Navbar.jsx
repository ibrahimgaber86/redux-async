import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <AppBar position='sticky' sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant='h1'>Redux</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
