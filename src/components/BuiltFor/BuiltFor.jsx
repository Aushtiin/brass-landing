import React from "react";
import "./BuiltFor.scss";
import Icon from "./Icon";
import pay from "../../images/pay.png";
import analytics from "../../images/analytics.png";
import team from "../../images/team.png";
import integration from "../../images/integration.png";
import security from "../../images/security.png";
import human from "../../images/human.png";

const BuiltFor = () => {
  return (
    <div className='second-component'>
      <div className='built-for'>
        <div className='bfg'>
          <h2>Built for growth</h2>
          <div className='leftunderline'></div>
        </div>
        <p className='right-text'>
          Made for entreprenuers, traders and fast-growing businesses looking
          for a super current account that can power their business at a very
          low cost
        </p>
      </div>
      <h2 className='mid-text'>A truly better current account</h2>
      <div className='features'>
        <Icon
          image={pay}
          head='Better, free payments'
          text='Pay and get paid faster for free. Goodbye to transaction fees.'
        />
        <Icon
          image={analytics}
          head='Analytics that matter'
          text='Dashboard that shows you the health of your business in real time.'
        />
        <Icon
          image={team}
          head='Team banking that is easy'
          text='Involve your team, set their roles and assign privileges easily.' 
        />
        <Icon
          image={integration}
          head='Integrations and services you need'
          text='Integration and services that help you stay on top of your finance.' 
        />
        <Icon
          image={security}
          head='State-of-the-Art-security'
          text='Peace of mind security you can rely on, with your money fully insured.' 
        />
        <Icon
          image={human}
          head='Great human support'
          text='Have questions? Talk to us anytime for any help you may need.' 
        />
      </div>
    </div>
  );
};

export default BuiltFor;
