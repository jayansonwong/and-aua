import React from 'react';
import './App.css';
import JsonQuestions from './QAData.json'
import $ from 'jquery'; 

class EnterQuestionBox extends React.Component{
    constructor(){
        super()

        // this.handleQuestion = this.handleQuestion.bind(this);
        // this.handleYes = this.handleYes.bind(this);
        // this.handleNo = this.handleNo.bind(this);

        this.state = {
            questions: Object.values(JsonQuestions)
        }
        

      }
    
      submitQuestion(){
        console.log($(".question-input").val());
        console.log($(".name-input").val());
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dT= date+' '+time;
        let userName = $(".name-input").val();
        let questionTitle= $(".question-input").val();
        if ($(".name-input").val()===""){
            userName = "Anon";
        }
        var jsonQuestion = {title:questionTitle, author:userName, datetime: dT};
        if ($(".question-input").val()!==""){
            JsonQuestions.questions.push(jsonQuestion);
            $(".question-input").val("");
            $(".name-input").val("");
        }
        
      }


render(){
  return(
    <div className="Enter-question-box">
        <div class="input-group">
        <div className="input-group-prepend">
            <span className="input-group-text">Enter A Question:</span>
        </div>
        <input type="text" class="question-input form-control input-sm"/>
        <span class="input-group-btn" style={{width:0+"px"}}></span>
        <input type="text" class="name-input form-control input-sm" placeholder="Enter your name (Optional)"/>
        <div className="input-group-append">
            <button type="button" className="btn btn-primary" onClick={this.submitQuestion}>✔</button>
        </div>
        </div>
    </div>
    );
  }
}

export default EnterQuestionBox;
