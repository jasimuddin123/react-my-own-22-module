import React from 'react';
import './App.css';

function App() {

  const products = [
    { name: 'Photoshop', price: '$200.44' },
    { name: 'Illustrator', price: '$333.33' },
    { name: 'PDF Reader', price: '$20.20' },
    { name: 'Indesign', price: '$100.33' }

  ]
  const info = {
    name: 'Sonabondu',
    profession: 'Serviceholder',
    salary: '3400 Sr'

  }
  const name = 'Jasim uddin';
  const schollerName = ['Zakir Nayek', 'Mizanur Rahman', 'Mufti Ibrahim'];
  const person = {
    name: 'Jasim Uddin',
    job: 'Supervisor',
    age: '33'
  }

  const player = {
    name: 'Ibarahim',
    country: 'Bangladesh',
    age: '45'
  }

  const personStyle = {
    color: 'cyan',
    backgroundColor: 'green',
    border: '1px solid lightgray',
    width: '300px'
  }

  return (

    <div style={personStyle} className="information">

      <h3 style={{ color: 'red' }}>Name:{name}</h3>
      <h2>Person Details: {person.name + " " + person.job}</h2>
      <h3>Player Details: {player.name + " " + player.country}</h3>

      {/* <Product name={products[0].name} price={products[0].price}></Product> */}

      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>

      <Basic></Basic>
      <Basic> </Basic>
      <Basic2 scholler={schollerName[1]} food="Protin"></Basic2>
      <Basic2 scholler="Mizanur Rahman" food="Desi Food"></Basic2>
      <Basic2 singer="Zain"></Basic2>

      <Information name={info.name} profession={info.profession} salary={info.salary}></Information>

    </div>

  );
}

// Basic Component 
function Basic(props) {

  return <h2 style={{ margin: '20px' }}>This is Basic Component</h2>
}

// Another Basic 
function Basic2(props) {

  return (

    <div style={{ border: '1px solid gray', margin: '20px', width: '500px', backgroundColor: 'gray' }}>
      <h2>Scholler Details :{props.scholler}</h2>
      <h3>Scholler Food: {props.food}</h3>
      <h3>Singer Name:{props.singer}</h3>

    </div>
  )
}

function Information(props) {
  const informationStyle = {
    color: 'green',
    border: '1px solid gold',
    backgroundColor: 'lightGray',
    width: '500px',
    height: '500px'
  }
  return (
    <div style={informationStyle} className="information">
      <h3>Name{props.name}</h3>
      <h3>Profession: {props.profession}</h3>
      <h3>Salary:{props.salary}</h3>
    </div>
  )
}

function Product(props) {

  const productStyle = {
    color: 'green',
    width: '300px',
    height: '200px',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    border: '2px solid green',
    float: 'left',
  }
  const { name, price } = props.product;

  return (
    <div style={productStyle} className="product">
      <h2>Name:{name}</h2>
      <h2>Price:{price}</h2>
      <button>Buy Now</button>
    </div>
  )

}


export default App;
