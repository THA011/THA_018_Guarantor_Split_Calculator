export const calculateShares = (totalAmount: number, numberOfGuarantors: number): number => {
    if (numberOfGuarantors <= 0) {
        throw new Error("Number of guarantors must be greater than zero.");
    }
    return totalAmount / numberOfGuarantors;
};

export const validateInput = (input: string): boolean => {
    const numberPattern = /^\d+(\.\d{1,2})?$/;
    return numberPattern.test(input);
};