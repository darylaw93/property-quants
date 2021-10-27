import React from "react";
import "./BodyForm.css"

const BodyForm = () => {
  return (
    <div className="right">
      <div className="formBox">
        <div className="formContent">
        <div style={{fontSize:'50px', fontWeight:'900'}}>Learn More About Our Program</div>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <input placeholder="Notes" className="notesInput" />
          <br/>
          <button>Get Started</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default BodyForm;
