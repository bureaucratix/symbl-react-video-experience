import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import FormContainer from './components/FormContainer.js'


class App extends React.Component{

  state = {
      link: null
    }
  

  render(){
  return (
    <div className="App">
      <FormContainer/>
    </div>
  );
}}

export default App;
