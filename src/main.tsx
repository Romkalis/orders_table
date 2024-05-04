import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {mockData} from './assets/Data/mockData';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App mockData={mockData} />
    </React.StrictMode>,
);
