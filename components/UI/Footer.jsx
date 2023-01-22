const { AppBar, Toolbar } = require("@mui/material");
const { Box } = require("@mui/system");
const { default: TextUI } = require("./TextUI");

const FooterUI = () => {
  return (
    <Box>
      <div>
        <Toolbar>
          <TextUI variant="body2" component="div">
            MADE BY ROHAN KUMAR THAKUR
          </TextUI>
        </Toolbar>
      </div>
    </Box>
  );
};

export default FooterUI;
