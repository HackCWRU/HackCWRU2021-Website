import React, { Component } from 'react';
import Button from 'react';
import hackCWRUTitle from '../Assets/Title.png';
import subTitle from '../Assets/Subtitle 2020.svg';
//import redButtonUp from '../Assets/register button up.svg';
//import whiteButtonUp from '../Assets/white button up.svg';
import Logo from './Logo.js';
import CoCPopUp from './CoCPopUp';
import Confirmation from './Confirmation';
import { Redirect } from 'react-router-dom';
import { rgbToHex } from '@material-ui/core';
import Countdown from './Countdown';
import { Link } from 'react-router-dom';
import Register from './Register';
class HeaderSection extends Component {


  constructor(props) {
    super(props);
    const {signUpConfirmation} = this.props;
    this.state = {
      showCodeOfConductBox: false,
      signUpConfirmation,
      redirectToMain: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.CoCBox = <CoCPopUp/>;
  }
  
  finishSignUp() {
    this.setState({
      signUpConfirmation: ! this.state.signUpConfirmation,
      redirectToMain: true,
    });
  }

  _onButtonClick() {
    this.setState({
      showCodeOfConductBox: ! this.state.showCodeOfConductBox,
    });
  }

  

    render() {
      var returnLink = encodeURIComponent("http://hackcwru.info");
        
      if(this.state.redirectToMain)
        return <Redirect to='/'/>

      return(
          <div id = "HeaderSection" >
            <div className = "header">
              <div className = "titleContainer">
                <div className = "mainTitleContainer">
                  <img id = "CWRUTitle" src =  {hackCWRUTitle} alt = "The HackCWRU Title"/>
                </div>
              
                <div className = "subTitleAndLogoContainer">
                  <div className = "subTitleContainer"> 
                    <div class="subTitleGrid">
                      <div id="headerInfo">
                      {  
                      //<div id = "CWRU" className = "bigClearText">Case Western Reserve University</div> 
                      }
                        <div id = "date" className = "bigClearText">February 4-6th 2022</div>
                        <div className = "bigClearText"><a href="https://www.google.com/maps/place/Sears+think%5Bbox%5D/@41.5005757,-81.6078735,17z/data=!3m1!4b1!4m5!3m4!1s0x8830fb871a38380b:0xed457fd242d00e1a!8m2!3d41.5005757!4d-81.6056848">Sears think[box]</a></div>
                        <div className = "bigClearText">More info coming soon...</div>
                        <div className = "bigClearText">Sign up for our mailing list</div>
                        <div className = "bigClearText">to receive updates!</div>
                      </div>
                    </div>
                    {
                      //<Countdown HackDate={'Febrary 4, 2022 17:30:00'}/>
                    }
                  </div>
                  {
                    // <Logo/>
                  }
                </div>
              </div>
              
            </div>
            <div className= "headerButtonSection">
              {
                /*
                <div className ="confirmation">
                <Confirmation signUpConfirmation={this.state.signUpConfirmation}
                  finishSignUp={this.finishSignUp.bind(this)} />

                </div>
                */
              }
              <div className = "registerButtonGroup">
              
              {
                /*<button onClick={
                  //this._onButtonClick.bind(this)
                  this._onButtonClick.bind( (e) => {
                    e.preventDefault();
                    window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSeRPp1tLWAgMvsGbwPTGD2nfasxWoi0YXOfX7zn9T5viDp3Gg/viewform?usp=sf_link'
                  } )
                } 
                id="registerBtn">Register
                </button>*/
                <a id="registerBtn" href="https://docs.google.com/forms/d/e/1FAIpQLSeRPp1tLWAgMvsGbwPTGD2nfasxWoi0YXOfX7zn9T5viDp3Gg/viewform?usp=sf_link">
                  SIGN ME UP
                </a>
              //<button id="registerBtn">Register</button>
              }
              {/*<CoCPopUp showCodeOfConductBox={this.state.showCodeOfConductBox}
                        _onButtonClick={this._onButtonClick.bind(this)} />
            */}
              </div>


              {/*
              <div className = "oldWebsiteButtonGroup">
                <a href="http://hack.cwru.edu/"><button id="oldWebsiteBtn">2020 website</button></a>
              </div>
              */}
            </div>
          </div>
        );
        }
}

export default HeaderSection;
