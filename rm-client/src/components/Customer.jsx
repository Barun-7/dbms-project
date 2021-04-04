
import React, { Component, useState } from 'react';
import '../css/Customer.css';
import User from '../images/User.png';



function Customer() {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

    const displayInfo = () => {
        console.log(name+password);
    };
        return (
            <div>
                <centre>
                <form>
                    <div className="card">
                    <img src={User} />
                    <div className="container">
                        <h2><b>Sign in Form</b></h2>
                 
                        <input className="textbox" onChange={(event)=>{
                            setname(event.target.value);
                        }} type="text" name="username" placeholder="Enter The User Name" size="35"/>
                        <br/>
                        <input className="textbox" onChange={(event)=>{
                            setpassword(event.target.value);
                        }} type="password" name="username" placeholder="Enter The Password" size="35"/>
                        <p>Please sign in your account.</p>
                        <a href="/customer/signUp">Sign up newcomers.!</a>
                        <br/>
                        <a onClick={displayInfo} href="#"><input className="btn_signin" type="button" name="signin" value="Sign In"/></a>
		                <input class="btn_clear" type="reset" name="clear" value="Clear"></input>
                    </div>
                    </div> 
                </form>
                </centre>
            </div>
        )
    };

export default Customer;