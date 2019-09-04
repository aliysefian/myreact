import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";
import Counter from "./components/counter";

// ReactDOM.render(elements,document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const person={
//   name:'ali',
//   talk(){console.log(this)}
// };
// person.talk();
// const jobs=[
//
//     {id:1,name:'ali',isActive:true},
//     {id:2,name:'ali',isActive:true},
//     {id:3,name:'ali',isActive:false},
//
//     ];
// let val=jobs.filter((job)=>{return job.isActive});
// console.log(val);
// const colors=['red','blue','green'];
// const ele=colors.map(color=>`<li>${color}</li>`);
// console.log(ele);
