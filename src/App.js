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
   border:'1px solid lightgray',
   width: '300px'
 }
  
  return (
    
    <div style={personStyle}className="information">
     
      <h3 style={{color:'red'}}>Name:{name}</h3>
      <h2>Person Details: {person.name + " " + person.job }</h2>
      <h3>Player Details: {player.name + " " + player.country}</h3>
 
   <Basic></Basic>
   
   <Basic2></Basic2>
   <Basic2></Basic2>

   </div>
  
  );
}

// Basic Component 
function Basic(){
  return <h2 style={{margin:'20px'}}>This is Basic Component</h2>
}

// Another Basic 
function Basic2(){
  return(
    <div style={{border:'1px solid gray', margin:'20px'}}>
      <h2>This is Basic two component</h2>
    </div>
  )
}




export default App;
