import React from 'react';
import { AllocationResult } from '../types';
import './animations/transitions.css';

interface ResultsDisplayProps {
    results: AllocationResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
    if (!results) {
        return <div className="results-display">No results to display.</div>;
    }

    return (
        <div className="results-display fade-in">
            <h2>Allocation Results</h2>
            <div className="result-item">
                <h3>Equal Capped Distribution</h3>
                <p>{results.equalCapped.join(', ')}</p>
            </div>
            <div className="result-item">
                <h3>Proportional Distribution</h3>
                <p>{results.proportional.join(', ')}</p>
            </div>
        </div>
    );
};

export default ResultsDisplay;