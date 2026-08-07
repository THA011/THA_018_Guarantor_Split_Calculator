import { GuarantorData } from '../types';

export const processInputData = (inputData: GuarantorData) => {
    // Ensure the total loan amount is a positive number
    if (inputData.totalLoanAmount <= 0) {
        throw new Error('Total loan amount must be greater than zero.');
    }

    // Validate each guarantor's deposit
    inputData.guarantors.forEach((guarantor) => {
        if (guarantor.deposit <= 0) {
            throw new Error(`Deposit for ${guarantor.name} must be greater than zero.`);
        }
    });

    // Format the input data for calculations
    const formattedData = {
        totalLoanAmount: parseFloat(inputData.totalLoanAmount.toFixed(2)),
        guarantors: inputData.guarantors.map((guarantor) => ({
            name: guarantor.name,
            deposit: parseFloat(guarantor.deposit.toFixed(2)),
        })),
    };

    return formattedData;
};