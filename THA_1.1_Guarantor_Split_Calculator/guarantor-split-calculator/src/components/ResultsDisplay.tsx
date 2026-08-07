import React from 'react';

interface ResultsDisplayProps {
    totalAmount: number;
    guarantorShares: { [key: string]: number };
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ totalAmount, guarantorShares }) => {
    return (
        <div>
            <h2>Calculation Results</h2>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            <h3>Guarantor Shares:</h3>
            <ul>
                {Object.entries(guarantorShares).map(([guarantor, share]) => (
                    <li key={guarantor}>
                        {guarantor}: ${share.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsDisplay;