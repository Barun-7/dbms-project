import React, { Component, useState } from 'react';
import '../css/Customer.css';

function SignUp() {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [mail, setemail] = useState("");
    return (
      <div>
          <form>
            <div className="card">
              <div className="container">
                <h2><b>- Details -</b></h2>
                <br/>
                <input className="textbox" type="text" name="name" placeholder="Enter Your Full Name" size="35"/>
                <br/>
                <input className="textbox" type="text" name="email" placeholder="Enter Your Email" size="35"/>
                <br/>
                <input className="textbox" type="text" name="moblieno" placeholder="Enter Your Mobile No" size="35"/>
                <br/>
                <a href="Qualifications.html"><input className="btn_Next" type="button" name="next" value="Submit"/></a>
                <input className="btn_clear" type="reset" name="clear" value="Clear"/>
              </div>
            </div>
          </form>
      </div>
    )
  }

export default SignUp;
