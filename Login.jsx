import React from 'react'

function click() {
    document.querySelector('#login-btn').onclick = () => {
        document.querySelector('.login_form_container').classList.toggle('active');
    }

    document.querySelector('#close-login-form').onclick = () => {
        document.querySelector('.login_form_container').classList.remove('active');
    }
}

const Login = () => {
    return (
        <div className="login_form_container">

            <span id="close-login-form">X</span>

            <form action="">

                <h3>user login</h3>
                <input type="email" placeholder="email" className="box" />
                <input type="password" placeholder="password" name="pass" className="box" autocomplete="off" id="password" />
                <p>forget your password <a href=" ">click here</a></p>
                <input type="submit" value="login now" class="btn" />
                <p>or login with</p>
                <div className="buttons">
                    <a href=" " class="btn">google</a>
                    <a href=" " class="btn">facebook</a>
                </div>
                <p>don't have an account <a href=" " id="r-btn" onClick={click}>create one</a></p>
            </form>

        </div>
    )
}

export default Login