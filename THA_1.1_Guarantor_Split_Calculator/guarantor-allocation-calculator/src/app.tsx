import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './styles/main.css';
import './styles/animations.css';
import './styles/theme.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;