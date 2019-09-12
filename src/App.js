import React from 'react';
import $ from 'jquery'; 
import logo from './logo.svg';
import './App.css';
import './Aua.css';
import AndBanner from './AndBanner';
import EnterQuestionBox from './EnterQuestionBox';
import QuestionList from './QuestionList';
import QuestionComponent from './QuestionComponent';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <AndBanner></AndBanner>
      <EnterQuestionBox></EnterQuestionBox>
      <QuestionList></QuestionList>
    </div>
  );
}

export default App;
