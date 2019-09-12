import React from 'react';
import './App.css';

class EnterQuestionBox extends React.Component{
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
    <div className="Enter-question-box">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Enter A Question:</span>
            </div>
            <input type="text" className="form-control" aria-label="Enter your question."></input>
            <div className="input-group-append">
                <button type="button" className="btn btn-primary">✔</button>

            </div>
        </div>
    </div>
    );
  }
}

export default EnterQuestionBox;
