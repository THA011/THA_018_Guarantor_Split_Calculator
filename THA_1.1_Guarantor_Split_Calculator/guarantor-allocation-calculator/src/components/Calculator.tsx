import React, { useState } from 'react';
import { calculateAllocation } from '../services/allocationEngine';
import InputForm from './InputForm';
import ResultsDisplay from './ResultsDisplay';
import './animations/transitions.css';

const Calculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [guarantorDeposits, setGuarantorDeposits] = useState<number[]>([]);
    const [results, setResults] = useState<{ equalCapped: number[]; proportional: number[] } | null>(null);

    const handleCalculate = () => {
        const allocationResults = calculateAllocation(loanAmount, guarantorDeposits);
        setResults(allocationResults);
    };

    return (
        <div className="calculator-container">
            <h1>Guarantor Allocation Calculator</h1>
            <InputForm 
                loanAmount={loanAmount} 
                setLoanAmount={setLoanAmount} 
                guarantorDeposits={guarantorDeposits} 
                setGuarantorDeposits={setGuarantorDeposits} 
                onCalculate={handleCalculate} 
            />
            {results && <ResultsDisplay results={results} />}
        </div>
    );
};

export default Calculator;