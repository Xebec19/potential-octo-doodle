import BottomNavBar from "./BottomNavBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopNavBar from "./TopNavBar";
import classes from "./UI.module.css";
import FooterUI from "./Footer";

const Layout = (props) => {
  const isMobile = !useMediaQuery("(min-width:600px)");

  return (
    <>
      <TopNavBar />
      <div className={classes.layoutContainer}>{props.children}</div>
      <FooterUI />
    </>
  );
};

export default Layout;
