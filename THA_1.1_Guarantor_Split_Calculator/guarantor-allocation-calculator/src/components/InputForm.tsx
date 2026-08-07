import React, { useState } from 'react';
import { validateInput } from '../utils/validators';

const InputForm: React.FC<{ onSubmit: (loanAmount: number, guarantorDeposits: number[]) => void }> = ({ onSubmit }) => {
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [guarantorDeposits, setGuarantorDeposits] = useState<number[]>([0]);

    const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setLoanAmount(value);
        }
    };

    const handleDepositChange = (index: number, value: number) => {
        const newDeposits = [...guarantorDeposits];
        newDeposits[index] = value;
        setGuarantorDeposits(newDeposits);
    };

    const addGuarantor = () => {
        setGuarantorDeposits([...guarantorDeposits, 0]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateInput(loanAmount, guarantorDeposits)) {
            onSubmit(loanAmount, guarantorDeposits);
        } else {
            alert('Please enter valid amounts.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <div>
                <label htmlFor="loanAmount">Total Loan Amount:</label>
                <input
                    type="number"
                    id="loanAmount"
                    value={loanAmount}
                    onChange={handleLoanAmountChange}
                    required
                />
            </div>
            {guarantorDeposits.map((deposit, index) => (
                <div key={index}>
                    <label htmlFor={`guarantorDeposit${index}`}>Guarantor Deposit {index + 1}:</label>
                    <input
                        type="number"
                        id={`guarantorDeposit${index}`}
                        value={deposit}
                        onChange={(e) => handleDepositChange(index, parseFloat(e.target.value))}
                        required
                    />
                </div>
            ))}
            <button type="button" onClick={addGuarantor}>Add Guarantor</button>
            <button type="submit">Calculate Allocation</button>
        </form>
    );
};

export default InputForm;