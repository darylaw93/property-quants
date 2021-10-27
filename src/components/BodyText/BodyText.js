import React from "react";
import "./BodyText.css";
import { SiDatabricks } from "react-icons/si";
import { BsGeoAlt, BsGraphUp } from "react-icons/bs";
import { GiSmart } from "react-icons/gi";

const BodyText = () => {
  return (
    <div className="left">
      <div className="textTitle">
        The #1 Real Estate Course From PhDs & Finance Experts
      </div>
      <div className="flavourText">
        Become a Real Estate Data Scientist in 11 Weeks.
      </div>
      <div className="textBody">
        PropertyQuants is the only Masters-level Real Estate Course that gives
        you the hard skills to find market-beating real estate opportunities &
        take action before the rest of the market. Live online classes taught by
        PhD instructors, using data science and machine learning that's proven
        to work.
      </div>
      <div className="logoList">
        <div className="logos">
          <SiDatabricks className="logoPic" />
          <br/>
          Data Science Fundamentals
        </div>
        <div className="logos">
          <BsGeoAlt className="logoPic" />
          <br/>
          Geographic Information Systems
        </div>
        <div className="logos">
          {" "}
          <BsGraphUp className="logoPic" />
          <br/>
          Data Science Methods for Real Estate
        </div>
        <div className="logos">
          <GiSmart className="logoPic" />
          <br/>
          Statistical Analysis & Forecasting Using Large Datasets
        </div>
      </div>
    </div>
  );
};

export default BodyText;
