import React, { useState } from "react";
import "./Form.css";
import Register from "./Register/Register";
import RegisterSuccess from "./Register/RegisterSuccess";
import Header from "./Header/Header";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <Header />
      <div className="root" id="root">
        <div className="form-container">
          <span className="close-btn">×</span>
          <div className="form-content-left">
            <img
              className="form-img"
              src="img/loginpurple.png"
              alt="purple-stones"
            />
          </div>
          {!isSubmitted ? (
            <Register submitForm={submitForm} />
          ) : (
            <RegisterSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
