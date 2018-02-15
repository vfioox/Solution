import React from "react";
import "../scss/Logo.scss";

const Logo = (props) => {
  let url = "";

  switch(props.size){
    case "small":
      url = "../public/img/logo_small.png";
      break;
    case "big":
      url = "../public/img/logo.png";
      break;
    case "vector":
      url = "../public/img/znak_billennium.svg";
      break;
    default:
      url = "../public/img/logo_small.png";
      break;
  }

  return (
    <div className="logo">
      <img src={url} />
    </div>
  );
};

export default Logo;
