import React from 'react';
import './App.css';

function App() {
  var name ='Jasim Uddin';
  const person ={
    name:'Jasim Uddin',
    age:33,
    job:'Supervisor'
  }

  const player ={
    name:'Ibrahim',
    country:'Bangladesh',
    age: 33,
  }
  const style ={
    color:'red',
    fontWeight:'bold',
    backgroundColor:'green',
  }
  return (
    <div>
     <h4>This is react Person </h4>
  <h2 style={{color:'cyan'}}> Person Details:{person.name + " " + person.job}</h2>
     <h3>Name :{name} </h3>
  <h3 className="" style={style}>Player Details : {player.name + " " + player.age}</h3>
   </div>
  );
}



export default App;
