import './styles.css'; // Add this line at the top of App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div className="App">
            <Dashboard />
        </div>
    );
}

export default App;
