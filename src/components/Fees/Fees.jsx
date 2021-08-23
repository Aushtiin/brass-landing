import React from "react";
import "./Fees.scss";
import fees from "../../images/fees.svg";
import { Image } from "react-bootstrap";
import FeeItem from "./FeeItem";

const Fees = () => {
  return (
    <div className='home-fees'>
      <div className='img-wrapper'>
        <Image src={fees} />
      </div>
      <div className='text-wrapper'>
        <h2 className='text-head'>Goodbye to bank fees</h2>
        <p class='text-desc'>
          N0.00 current account that renders delightful premium service to your
          business.
          <br />
          <br />
          No monthly fee. No transaction fees, minimum balance, service charges,
          hidden fees.
        </p>
        <div className='fees-list'>
          <FeeItem text='Minimum balance' />
          <FeeItem text='Transaction fees' />
          <FeeItem text='Account opening fee' />
          <FeeItem text='Monthly subscription' />
        </div>
        <a href='/'>
          Learn more {'>'}
        </a>
      </div>
    </div>
  );
};

export default Fees;
