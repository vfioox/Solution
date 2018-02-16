import React from "react";
import "../../scss/Logo.scss";

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
    case "vector_cut":
      url = "../public/img/znak_billennium_cut.svg";
      break;
    default:
      url = "../public/img/logo_small.png";
      break;
  }

  let titleBlock = "";

  if(props.title){
    titleBlock = (<div className="title-container">
      <span className="title">DCMT</span>
    </div>);
  }

  return (
    <div className="logo">
      <img src={url} />
      {titleBlock}
    </div>
  );
};

export default Logo;