import React from "react";
import "./Altfooter.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Altfooter() {
  return (
    <div className="altfooter">
      <TwitterIcon className="twittericon" />
      <FacebookIcon className="facebookicon" />
      <InstagramIcon className="instagramicon" />
    </div>
  );
}

export default Altfooter;
