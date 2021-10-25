import React from "react";
import "./BodyForm.css"

const BodyForm = () => {
  return (
    <div className="right">
      <div className="formBox">
        <h1>Learn More About Our Program</h1>
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
  );
};

export default BodyForm;
