export const validateLoanAmount = (amount: number): boolean => {
    // Check if the loan amount is a positive number
    return amount > 0;
};

export const validateGuarantorDeposit = (deposit: number): boolean => {
    // Ensure the guarantor deposit is a positive number
    return deposit > 0;
};

export const validateInputFields = (loanAmount: number, deposits: number[]): boolean => {
    // Validate that all deposits are positive and the loan amount is valid
    if (!validateLoanAmount(loanAmount)) {
        return false;
    }
    return deposits.every(deposit => validateGuarantorDeposit(deposit));
};

export const validatePercentage = (percentage: number): boolean => {
    // Check if the percentage is between 0 and 100
    return percentage >= 0 && percentage <= 100;
};