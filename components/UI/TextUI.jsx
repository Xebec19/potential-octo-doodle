import Typography from "@mui/material/Typography";

const TextUI = (props) => {
  return <Typography {...props}>{props.children}</Typography>;
};

export default TextUI;
