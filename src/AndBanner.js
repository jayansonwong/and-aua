import React from 'react';
import './App.css';
import logo from './images/AND_logo.png'



class AndBanner extends React.Component{
    constructor(){
        super()

        // this.handleQuestion = this.handleQuestion.bind(this);
        // this.handleYes = this.handleYes.bind(this);
        // this.handleNo = this.handleNo.bind(this);

        this.state = {
            // question : "Is it to do with activities?",
            // yesClick: false,
            // noClick: false,
            // pauseState: true,
          }


      }


render(){
  return(
     <div className="And-banner">
       <img className="And-logo" src={logo}></img>
     </div>
    );
  }
}

export default AndBanner;
