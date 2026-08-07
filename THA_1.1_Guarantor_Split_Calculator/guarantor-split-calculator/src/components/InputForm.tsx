import React, { useState } from 'react';

const InputForm: React.FC<{ onCalculate: (data: { amount: number; guarantors: number }) => void }> = ({ onCalculate }) => {
    const [amount, setAmount] = useState<number>(0);
    const [guarantors, setGuarantors] = useState<number>(1);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onCalculate({ amount, guarantors });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Total Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label htmlFor="guarantors">Number of Guarantors:</label>
                <input
                    type="number"
                    id="guarantors"
                    value={guarantors}
                    onChange={(e) => setGuarantors(Number(e.target.value))}
                    min="1"
                    required
                />
            </div>
            <button type="submit">Calculate</button>
        </form>
    );
};

export default InputForm;