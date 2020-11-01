import React, {useState} from 'react'
import Form from './Form'

const request = require('request');



const testAlert = function(){
console.log("Received")
}

class FormContainer extends React.Component{
    

render(){
   return( <header className="App-header">
       <h1>Video to Experience</h1>
        <Form passToken={testAlert} />
        
      </header>
   )
}

}


export default FormContainer;
