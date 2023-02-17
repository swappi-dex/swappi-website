import React from 'react';
import ReactDOM from 'react-dom/client';
import Website from './parts';
import 'custom-react-scrollbar/dist/style.css';
import 'uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Website />
    </React.StrictMode>
);
