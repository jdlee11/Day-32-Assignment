import React from 'react';
import { hashHistory } from 'react-router';

const LoginForm = React.createClass({
  loginFunction: function(){
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    console.log(`logged in! username: ${username} password: ${password}`);
    hashHistory.push('/');
  },
  signupFunction: function(){
    let newusername = this.refs.newusername.value;
    let newpassword = this.refs.newpassword.value;
    console.log(`signed up! username: ${newusername} password: ${newpassword}`);
    hashHistory.push('/');
  },
  render: function(){
    console.log('log in page');
    return (
      <div className="login-form">
        <input type="text" placeholder="username" ref="username"/>
        <input type="password" placeholder="password" ref="password"/>
        <input type="button" value="Log in" onClick={this.loginFunction} />
        <input type="text" placeholder="new username" ref="newusername"/>
        <input type="password" placeholder="new password" ref="newpassword"/>
        <input type="button" value="Sign up" onClick={this.signupFunction} />
      </div>
    );
  }
});

export default LoginForm;
