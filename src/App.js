import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
 
  return <div>
    <h1>In the name of Allah</h1>
    <h2>Eid ul Adha Mubarak</h2>
     Hello World from  <strong>{name}</strong> and age...{age+22} !
     <ol>
       <li>Covid-19</li>
       <li>Flu</li>
       <li>WHO</li>
     </ol>
     <br/>
  <Hello firstName ={name}></Hello>
  </div>
 
}


export default App;
