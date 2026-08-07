// This file defines TypeScript interfaces and types used throughout the application, ensuring type safety and clarity in data structures.

export interface Guarantor {
    id: string;
    name: string;
    deposit: number;
}

export interface AllocationResult {
    equalCapped: number[];
    proportional: number[];
}

export interface CalculationParameters {
    totalLoanAmount: number;
    guarantors: Guarantor[];
}

export type AllocationMethod = 'equalCapped' | 'proportional';