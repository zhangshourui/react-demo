import React from 'react';
import '../App.css';

function Login() {
    return (
        <div className="login">
            <h4>
                登录
          </h4>
            <p>
                <label>用户名：</label>
                <input type="text" name="username" className="input w200 login-input" />
            </p>
            <p>
                <label>密&#12288;码：</label>
                <input type="password" name="password" className="input w200 login-input" />
            </p>
            <p className="text-center">
                <button type="button" className="btn btn-primary">登录</button>
            </p>
        </div>
    );
}

export default Login;
