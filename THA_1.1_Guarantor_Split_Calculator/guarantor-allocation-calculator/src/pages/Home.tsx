import React from 'react';
import { Link } from 'react-router-dom';
import './styles/main.css'; // Importing main styles for the Home page
import './animations/transitions.css'; // Importing animation styles for smooth transitions

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Guarantor Allocation Calculator</h1>
            <p className="home-description">
                This application helps you calculate the optimal allocation of guarantees among multiple guarantors.
                You can easily input loan amounts and guarantor deposits to see how the allocations are determined.
            </p>
            <div className="home-navigation">
                <Link to="/calculator" className="nav-link">Go to Calculator</Link>
                <Link to="/dashboard" className="nav-link">View Dashboard</Link>
            </div>
        </div>
    );
};

export default Home;