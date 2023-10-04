import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from './App';
import './Index.css'


const PrintName=()=>
{
  return <h1>Hello  Gopala Krishna</h1>;
}

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
 

 <PrintName />
 <App />
  </>
);

