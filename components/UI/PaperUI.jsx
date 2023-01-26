import React from "react";
import Paper from "@mui/material/Paper";

const PaperUI = (props) => {
  return <Paper {...props}>{props.children}</Paper>;
};

export default React.memo(PaperUI);
