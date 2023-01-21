import React from 'react';
import Navigation from './navbar';
import UserName from './username-password';

export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className='header'>
                    <Navigation />
                </div>
                <br></br>
                <div className="logIn">
                <h3>Log In</h3>
                </div>
                <div ClassName="body">
                    <UserName />
                </div>
            </div>
        )
    }
}
