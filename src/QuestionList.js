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
        let fetchData = () => {
            Promise.resolve(this.state.questions).then(questions => {
            this.setState({questions})
          })
        }
        
        fetchData()
        this.update = setInterval(fetchData, 2000)
      }
      
      componentWillUnmount() {
        clearInterval(this.update)
      }

    render() {
    return (
        <React.Fragment>
        {this.state.questions[0].map(question => <QuestionComponent 
        questionTitle={question.title} 
        questionAuthor={question.author}
        questionDateTime={question.datetime}
        >
        </QuestionComponent>)}
        </React.Fragment>
    );
    }

}

export default QuestionList;
