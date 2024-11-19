import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from "./comments"
// import all images
import avataruser1 from "./images/batman"
import avataruser2 from "./images/businessman.png"
import avataruser3 from "./images/lady.png"

const App = function(){
  return(
    <>
    <h1 style={{textAlign:"center"}}>Brett Hirsch</h1>
    <section className='container'>
      <User image ={avataruser1} name="Batman" date="11/12/2024" msg="I am Batman"/>
      <User image ={avataruser2} name="Peter" date="10/31/2024" msg="I am Batman"/>
      <User image ={avataruser1} name="Jessica" date="10/16/2024" msg="Great Job!"/>
    </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

