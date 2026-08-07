export interface InputData {
    totalAmount: number;
    numberOfGuarantors: number;
}

export interface CalculationResult {
    sharePerGuarantor: number;
    totalShare: number;
}

export interface Props {
    inputData: InputData;
    onCalculate: (data: InputData) => CalculationResult;
}