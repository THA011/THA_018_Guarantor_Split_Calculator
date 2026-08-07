import React, { useState } from 'react';
import InputForm from './InputForm';
import ResultsDisplay from './ResultsDisplay';
import { calculateShares } from '../utils/calculations';

const Calculator: React.FC = () => {
    const [inputData, setInputData] = useState({ amount: 0, contributors: [] });
    const [results, setResults] = useState<{ [key: string]: number }>({});

    const handleInputChange = (data: { amount: number; contributors: string[] }) => {
        setInputData(data);
    };

    const handleCalculate = () => {
        const calculatedResults = calculateShares(inputData.amount, inputData.contributors);
        setResults(calculatedResults);
    };

    return (
        <div>
            <InputForm onInputChange={handleInputChange} onCalculate={handleCalculate} />
            <ResultsDisplay results={results} />
        </div>
    );
};

export default Calculator;