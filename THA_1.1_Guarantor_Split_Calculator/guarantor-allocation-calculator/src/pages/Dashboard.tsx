import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Importing styles specific to the Dashboard

const Dashboard = () => {
    // Sample data representing previous calculations
    const previousCalculations = [
        { id: 1, loanAmount: 50000, guarantorDeposits: [20000, 30000], result: 'Equal Capped Distribution: $25000 each' },
        { id: 2, loanAmount: 100000, guarantorDeposits: [40000, 60000], result: 'Proportional Distribution: $40000 and $60000' },
    ];

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <p>Review your previous calculations below:</p>
            <table className="calculations-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Loan Amount</th>
                        <th>Guarantor Deposits</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {previousCalculations.map(calculation => (
                        <tr key={calculation.id}>
                            <td>{calculation.id}</td>
                            <td>${calculation.loanAmount}</td>
                            <td>${calculation.guarantorDeposits.join(', $')}</td>
                            <td>{calculation.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
};

export default Dashboard;