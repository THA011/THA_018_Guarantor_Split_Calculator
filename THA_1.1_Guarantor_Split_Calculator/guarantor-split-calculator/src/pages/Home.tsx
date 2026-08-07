import React from 'react';
import Calculator from '../components/Calculator';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Guarantor Split Calculator</h1>
            <Calculator />
        </div>
    );
};

export default Home;