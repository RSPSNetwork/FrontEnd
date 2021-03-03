import React, { useState } from "react";
import './Form.css'
import Login from './Login'
import Header from "../Header/Header";

const Form = () => {

  return (
    <>
      <Header />
      <div className="root" id="root">
        <div className="form-container">
          <span className="close-btn">×</span>
          <div className="form-content-left">
            <img
              className="form-img"
              src="img/loginchest.png"
              alt="purple-stones"
            />
          </div>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Form;
