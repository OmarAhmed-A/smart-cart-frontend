import React from 'react';
import Home from './Home';
import './Product.css'; // Optional: for global styles

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="app-header">
                <h1>Supermarket</h1>
            </header>
            <main>
                <Home />
            </main>
            <footer className="app-footer">
                <p>&copy; 2024 Supermarket Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;