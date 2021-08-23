import React from "react";

const FeeItem = (props) => {
  return (
    <div class='fee-item'>
      <h5>{props.text}</h5>
      <p>₦0.00</p>
    </div>
  );
};

export default FeeItem;
