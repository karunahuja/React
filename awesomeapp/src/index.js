// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import './index.css'
import App from './App.jsx';

import Card from './Card.jsx';
import Sdata from './Sdata';

import {BrowserRouter} from "react-router-dom"

ReactDOM.render(

  <BrowserRouter>
<App></App></BrowserRouter> 
  ,
  document.getElementById('root'));

