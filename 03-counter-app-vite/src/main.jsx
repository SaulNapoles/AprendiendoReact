import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWordApp';
import {FirstApp} from './FirstApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title = 'Hola, soy Goku'/>
    </React.StrictMode>
)