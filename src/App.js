// import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import React, { Component } from 'react';
import ButtonAppBar  from './components/navBar.js';
import UsernameTextFields from './components/usernameField';
import PasswordTextFields from './components/passwordField';
import LoginButton from './components/loginButton'
import CardOne from './components/cardOne';
import CardTwo from './components/cardTwo';
import CardThree from './components/cardThree';
import './componentStyles/cards.css'

// import * as navigationBar from './components/navBar.js'; 


export default class Music extends Component {
  
  constructor(props) {
    super(props)
    this.state={
    loggedIn: false,
      }
    // this.logIn = this.logIn.bind(this)
    
  }

logIn = (props) => {
  this.setState({
    loggedIn: true
  });
  console.log(this.loggedIn)
} 
  
  render() {

      if (this.state.loggedIn) {
        return (

          
          <div>
            <div>
              <ButtonAppBar></ButtonAppBar>
            </div>

            <div className='cards'>
              <CardOne></CardOne>
              <CardTwo></CardTwo>
              <CardThree></CardThree>
            </div>

          </div>
        )
      }
      else {
        return (
          <div>
            <div>
            <ButtonAppBar></ButtonAppBar>
            </div>

            <div className='center'>
              <div>
              <UsernameTextFields></UsernameTextFields>
              </div>

              <div>
                <PasswordTextFields></PasswordTextFields>
              </div>

              <button onClick={this.logIn}>
              <LoginButton></LoginButton>
              </button>

            </div>

          </div>


        )
      }
  }

}