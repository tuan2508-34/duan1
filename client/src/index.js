import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from './context';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
           <AppProvider><App /></AppProvider>
    
    </Router>
);

