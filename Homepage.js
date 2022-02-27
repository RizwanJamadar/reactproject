import React from "react";
import './homepage.css';
import Login from './Login'

function click() {
    document.querySelector('#login-btn').onclick = () => {
        document.querySelector('.login_form_container').classList.toggle('active');
    }

    document.querySelector('#close-login-form').onclick = () => {
        document.querySelector('.login_form_container').classList.remove('active');
    }

    document.querySelector('#r-btn').onclick = () => {
        document.querySelector('.Registration_form_container').classList.toggle('active');
        document.querySelector('.login_form_container').classList.remove('active');
    }
    
      document.querySelector('#close-register-form').onclick = () => {
        document.querySelector('.Registration_form_container').classList.remove('active');
    }
}

const Homepage = () => {
    return (
        <>
            {/* header or navbar */}
            <header className="header">

                <a href="" className="logo"> <span>Q</span>Labs</a>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">About</a>
                    <a href="#services">services</a>
                    <a href="#review">review</a>
                    <a href="#contact">contact</a>
                </nav>

                <div id="login-btn">
                    <button className="btn" onClick={click}>login</button>
                </div>
            </header>

            {/* login form  */}
            <div className="login_form_container">

                <span id="close-login-form">X</span>

                <form action="">

                    <h3>user login</h3>
                    <input type="email" placeholder="email" className="box" />
                    <input type="password" placeholder="password" name="pass" className="box" autocomplete="off" id="password" />
                    <p>forget your password <a href="#">click here</a></p>
                    <input type="submit" value="login now" class="btn" />
                    <p>or login with</p>
                    <div className="buttons">
                        <a href="#" class="btn">google</a>
                        <a href="#" class="btn">facebook</a>
                    </div>
                    <p>don't have an account <a href="#" id="r-btn" onClick={click}>create one</a></p>
                </form>

            </div>

            {/* <Login/> */}

            {/* registration form */}

            <div class="Registration_form_container">

                <span id="close-register-form">X</span>

                <form action="">

                    <h3>user Registration</h3>
                    <input type="text" placeholder="Enter Full Name" class="box" />
                    <input type="email" placeholder="Enter Email" class="box" />
                    <input type="password" placeholder="Create Password" class="box" />
                    <input type="number" placeholder="Enter Phone Number" class="box" />
                    <input type="submit" value="Register now" class="btn" />
                </form>
            </div>


            <section className="home">
                <div className="content">
                    <h3>I'm <br /> Rizwan Jamadar,</h3>
                    <p>I'm doing internship in quantique labs<br />as intern for 3 months time period.</p>
                    <a href="#" className="btn">contact me</a>
                </div>
            </section>

        </>
    );
};

export default Homepage;
