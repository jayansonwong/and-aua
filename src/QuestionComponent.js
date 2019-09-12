import React from 'react';
import './App.css';

class QuestionComponent extends React.Component{
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
    <div className="Enter-question-box border rounded">
        <div className="Question-title">{this.props.questionTitle}</div>
        <div className="Question-author">Asked by: {this.props.questionAuthor}</div>
        <div className="Question-author">Date: {new Date(this.props.questionDateTime).toString()}</div>
    </div>
    );
  }
}

export default QuestionComponent;
