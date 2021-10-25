import React from "react";
import "./BodyText.css"

const BodyText = () => {
  return (
    <div className="left">
      <div className="textTitle">The #1 Real Estate Course From PhDs & Finance Experts</div>
      <div className="flavourText">Become a Real Estate Data Scientist in 11 Weeks.</div>
      <div className="textBody">
        PropertyQuants is the only Masters-level Real Estate Course that gives
        you the hard skills to find market-beating real estate opportunities &
        take action before the rest of the market. Live online classes taught by
        PhD instructors, using data science and machine learning that's proven
        to work.
      </div>
      <div className="logoList">
        <div className="logos">Data Science Fundamentals</div>
        <div className="logos">Geographic Information Systems</div>
        <div className="logos">Data Science Methods for Real Estate</div>
        <div className="logos">Statistical Analysis & Forecasting Using Large Datasets</div>
      </div>
    </div>
  );
};

export default BodyText;
