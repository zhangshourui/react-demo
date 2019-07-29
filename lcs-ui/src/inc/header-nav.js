import React from 'react';
import logo from '../logo.svg'

function IncHeaderNav() {
    return (
        <div className="Header">
            <header className="App-header">
                <ul>
                    <li className="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </li>
                    <li>
                        <a href="/docs">文档</a>
                    </li>
                </ul>

            </header>
        </div>
    );
}

export default IncHeaderNav;
