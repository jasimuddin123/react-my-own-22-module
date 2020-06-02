import React from 'react';
import './App.css';

function App() {
 const name = 'Jasim uddin';

 const person = {
   name:'Jasim Uddin',
   job: 'Supervisor',
   age:'33'
 }

 const player ={
   name:'Ibarahim',
   country:'Bangladesh',
   age:'45'
 }

 const personStyle ={
   color:'cyan',
   backgroundColor:'green',
   border:'1px solid lightgray'
 }
  
  return (
    <h1>This Number 22-5 Part onl explain about Component identity </h1>
    <div style={personStyle}className="information">
      <h3 style={{color:'red'}}>Name:{name}</h3>
      <h2>Person Details: {person.name + " " + person.job }</h2>
      <h3>Player Details: {player.name + " " + player.country}</h3>
 
   </div>
  );
}




export default App;
