import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pesquisa from './Pesquisa';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

 


ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/Pesquisa" component={Pesquisa}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
