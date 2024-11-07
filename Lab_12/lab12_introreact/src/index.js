import React from 'react';
import ReactDOM from 'react-dom/client';
import car from './images/car.jpg'
import './index.css';

//content in the app
const App = function(){
  // creating a JSX variable
  const anymsg = "I am text consant variable"
  return (
    <>
    <h1 style={{color:'magenta', textAlign:'center'}}>Welcome to React JS</h1>
    <h2 style={{fontFamily:'algerian'}} className='subtitle'>Brett Hirsch</h2>
    <figure style={{border:"inset olive 5px", width: '60%', margin:'auto'}}>
      <img src={car} style={{width:'100%'}}/>
    </figure>
    <h2>{anymsg}</h2>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
App()
);



