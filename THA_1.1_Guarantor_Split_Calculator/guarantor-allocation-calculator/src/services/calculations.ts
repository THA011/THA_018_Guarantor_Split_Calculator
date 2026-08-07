// This file contains utility functions for performing the mathematical calculations required for the allocation engine.

// Function to calculate equal capped distribution among guarantors
export const calculateEqualCappedDistribution = (totalLoan: number, guarantorDeposits: number[]): number[] => {
    const numberOfGuarantors = guarantorDeposits.length;
    const cappedAmount = totalLoan / numberOfGuarantors;
    return guarantorDeposits.map(deposit => Math.min(deposit, cappedAmount));
};

// Function to calculate proportional distribution based on guarantor deposits
export const calculateProportionalDistribution = (totalLoan: number, guarantorDeposits: number[]): number[] => {
    const totalDeposits = guarantorDeposits.reduce((acc, deposit) => acc + deposit, 0);
    return guarantorDeposits.map(deposit => (deposit / totalDeposits) * totalLoan);
};

// Function to validate if the total loan amount is greater than zero
export const isValidLoanAmount = (amount: number): boolean => {
    return amount > 0;
};

// Function to validate if the guarantor deposits are valid
export const areValidDeposits = (deposits: number[]): boolean => {
    return deposits.every(deposit => deposit >= 0);
};