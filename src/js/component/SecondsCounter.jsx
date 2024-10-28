

import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = ({ seconds }) => {
  const padNumber = (num) => String(num).padStart(6, '0');

  return (
    <div className="seconds-counter">
		<div className="icon-box">
      <FontAwesomeIcon icon={faClock} className="icon" />
	  </div>
      <div className="numbers">
        {padNumber(seconds).split('').map((digit, index) => (
          <div key={index} className="digit-box">
		 <span className="digit">{digit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};	
        

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;

