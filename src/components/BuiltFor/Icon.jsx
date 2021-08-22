import React from "react";
import { Image } from "react-bootstrap";
// import pay from "../../images/pay.png";

const Icon = (props) => {
  return (
    <div className='icons'>
      <div className='icon-img'>
        <Image src={props.image} />
      </div>
      <h5>{props.head}</h5>
      <p>{props.text}</p>
    </div>
  );
};

export default Icon;
