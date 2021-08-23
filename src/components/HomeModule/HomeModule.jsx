import React from "react";
import "./HomeModule.scss";
import computer from '../../images/computer2.svg'
import { Image } from "react-bootstrap";

const HomeModule = () => {
  return (
    <div className='home-mod'>
      <div className='main-text'>
        <h5>BANK BETTER</h5>
        <h1>
          Made for business
          <br />
          current account .
        </h1>
        <p className='powertxt'>
          Powerful yet simple. Great human support.
          <br />
          Open an account in <strong>10 minutes!</strong>
        </p>
        <a href='/'>
          <button>Open an account</button>
        </a>
        <p className='p-caption'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='home-svg'
          >
            <polyline points='20 6 9 17 4 12'></polyline>
          </svg>
          If you need any help, call 01-700-2000
        </p>
      </div>
      <div className="svg-img">
        <Image src={computer} />
      </div>
    </div>
  );
};

export default HomeModule;
