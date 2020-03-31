import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

  const componentDiv = $("#app")[0];
  ReactDOM.render(<AppRouter />,componentDiv);


// ===========Challenge==========
// Build a Portfolio themed website skeleton
// Pages:
// 1. Home:
//  1.1 Welcome message
// 2. Portfolio
//  2.1 Link to our project number 1
//  2.2. Link to project number 2
// 3. Contact 
//  3.1. Contact information

// Header with the 3 links wich always stays on top
