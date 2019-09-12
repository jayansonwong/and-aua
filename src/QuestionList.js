import React from 'react';
import './App.css';
import JsonQuestions from './QAData.json'
import QuestionComponent from './QuestionComponent';

class QuestionList extends React.Component{
    constructor(){
        super()

        // this.handleQuestion = this.handleQuestion.bind(this);
        // this.handleYes = this.handleYes.bind(this);
        // this.handleNo = this.handleNo.bind(this);

        this.state = {
            questions: Object.values(JsonQuestions)
          }

        // this.setState({
        //     questions: JsonQuestions.map(question => {title: question.title})
        // })
        //this.setState({ questions: Object.values(JsonQuestions)});


      }
    componentDidMount(){
        console.log(JsonQuestions);
        console.log(this.state.questions);
    }

    render() {
    return (
        <React.Fragment>
        {this.state.questions[0].map(question => <QuestionComponent questionTitle={question.title} questionAuthor={question.author}></QuestionComponent>)}
        </React.Fragment>
    );
    }

}

export default QuestionList;
