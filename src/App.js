import React, { useState } from 'react';
import './App.css';



const schollerName = ['Mizanur Rahman', 'Mufti Kazi Ibrahim', 'Mulla Nazim'];

const heroName = ['Jasim', 'Kamal', 'Milon', 'Sharef'];



const person = {
  name: 'Zahid Iqbal',
  age: '50',
  job: 'Forklift Operator'
}

const player = {
  name: 'Munna',
  age: '55',
  profession: 'Soccer Player'
}

function App() {

  const products = [

    { name: 'Photoshop', price: '$200.55' },
    { name: 'Illustrator', price: '$100.33' },
    { name: 'Adove Reader', price: '$250.20' },
    { name: 'Premium', price: '$100.20' }

  ]

  const personStyle = {
    color: 'green',
    backgroundColor: 'gray',
    width: '300px',

    border: '5px solid green',


  }

  const playerStyle = {
    color: 'blue',
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    borderRadius: '2px',
    border: '10px solid gold',
    margin: '10px'
  }
  return (



    <div style={personStyle}>
      <h3> Name :{person.name + " " + person.age}</h3>
      <h4>Age:{person.age}</h4>
      <h4>Profession:{person.job}</h4>
      <ul style={{ color: 'white' }}>
        {
          heroName.map(hero => <li>{hero}</li>)
        }
        {
          products.map(pd => <li>{pd.name}</li>)
        }
        {
          products.map(product => <Product product={product}></Product>)
        }

      </ul>

      {
        products.map(pd => <Product product={pd}></Product>)
      }

      <h2 style={playerStyle}>Player Name: {player.name}</h2>

      <h3 style={{ color: 'gold', fontSize: '40px', border: '10px solid' }}>Player profeesion:{player.profession}</h3>
      <Basic></Basic>

      <Basic2 scholler={schollerName[0]} food="Vegitable"></Basic2>
      <Basic2 name="Jasim Uddin" profession="Supervisior" experience="15 years"></Basic2>

      <Product product={products[0]}> </Product>
      <Product></Product>
      <Product></Product>

      <Counter></Counter>
    </div>




  );
}

function Basic() {

  const basicStyle = {
    color: 'yellow',
    backgroundColor: 'gray'
  }
  return <h2 style={basicStyle}>This is Basic Component All the time</h2>
}

function Basic2(props) {

  const basic2Style = {
    color: 'cyan',
    background: 'gray'
  }
  return (
    <div style={basic2Style} className="">
      <h3>Scholler Name :{props.scholler + " " + props.food}</h3>
      <h4>Profession: {props.profession}</h4>
      <h4>Experience:{props.experience}</h4>
    </div>

  )

}

function Product(props) {

  const productStyle = {
    color: 'cyan',
    backgroundColor: 'gray',
    float: 'right',
    width: '300px',
    height: '200px',
    border: '5px solid green',
    textAlign: 'center'
  }


  return (
    <div style={productStyle}>

      <h2> Product:</h2>
      <h3>Price:</h3>
      <button>Buy Now</button>

    </div>

  )
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count{count}</h3>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>

  )
}

export default App;
