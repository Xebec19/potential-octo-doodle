const { Avatar } = require("@mui/material");

const AvatarUI = (props) => {
  return <Avatar {...props}>{props.children}</Avatar>;
};

export default AvatarUI;
