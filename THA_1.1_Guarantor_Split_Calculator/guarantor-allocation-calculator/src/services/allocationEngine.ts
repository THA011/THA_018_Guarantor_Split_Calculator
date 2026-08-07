// This file contains the core logic for calculating the allocation of guarantees among the guarantors based on the selected method (equal capped or proportional).

interface Guarantor {
    name: string;
    deposit: number;
}

interface AllocationResult {
    equalCapped: number[];
    proportional: number[];
}

class AllocationEngine {
    private guarantors: Guarantor[];
    private totalLoanAmount: number;

    constructor(guarantors: Guarantor[], totalLoanAmount: number) {
        this.guarantors = guarantors;
        this.totalLoanAmount = totalLoanAmount;
    }

    public calculateAllocations(method: 'equalCapped' | 'proportional'): AllocationResult {
        switch (method) {
            case 'equalCapped':
                return this.calculateEqualCappedAllocations();
            case 'proportional':
                return this.calculateProportionalAllocations();
            default:
                throw new Error('Invalid allocation method');
        }
    }

    private calculateEqualCappedAllocations(): AllocationResult {
        const totalDeposits = this.guarantors.reduce((sum, guarantor) => sum + guarantor.deposit, 0);
        const cap = this.totalLoanAmount / this.guarantors.length;
        const equalCappedAllocations = this.guarantors.map(guarantor => Math.min(guarantor.deposit, cap));
        return {
            equalCapped: equalCappedAllocations,
            proportional: []
        };
    }

    private calculateProportionalAllocations(): AllocationResult {
        const totalDeposits = this.guarantors.reduce((sum, guarantor) => sum + guarantor.deposit, 0);
        const proportionalAllocations = this.guarantors.map(guarantor => 
            (guarantor.deposit / totalDeposits) * this.totalLoanAmount
        );
        return {
            equalCapped: [],
            proportional: proportionalAllocations
        };
    }
}

export default AllocationEngine;