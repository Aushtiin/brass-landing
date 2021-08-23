import React from "react";
import { Image } from "react-bootstrap";
import "./ChooseBetter.scss";
import ListItem from "./ListItem";
import office from "../../images/office.png";

const ChooseBetter = () => {
  return (
    <div className='choose-page'>
      <div className='left-mod'>
        <div className='head-div'>
          <h2 className=''>Choose better</h2>
          <p className=''>
            Run your business on simple, useful modern tools and account
            services that help you get started and grow your business.
          </p>
        </div>
        <div className='list-mod'>
          <ListItem text='Constantly improving' />
          <ListItem text='Built-in services you need for business' />
          <ListItem text='Save time and money' />
        </div>
      </div>
      <div className='right-mod'>
        <aside className='aside-text'>
          Get support, advice and services from a team that genuinely cares
          about your business.
        </aside>
        <Image alt='woman in office chair' src={office} />
      </div>
    </div>
  );
};

export default ChooseBetter;
