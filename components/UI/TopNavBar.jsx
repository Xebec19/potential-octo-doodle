import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./UI.module.css";
import TextUI from "./TextUI";

export default function TopNavBar() {
  return (
    <Box className={classes.topNavBar__container}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <TextUI variant="h5" component="div">
            Khushi
          </TextUI>
          <SearchIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
