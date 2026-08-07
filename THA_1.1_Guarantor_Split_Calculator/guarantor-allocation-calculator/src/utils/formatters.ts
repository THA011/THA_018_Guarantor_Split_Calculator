// src/utils/formatters.ts

/**
 * Utility functions for formatting numbers and currency values.
 */

/**
 * Formats a number to a currency string.
 * @param amount - The amount to format.
 * @param currency - The currency symbol to use (default is '$').
 * @returns A formatted currency string.
 */
export const formatCurrency = (amount: number, currency: string = '$'): string => {
    return `${currency}${amount.toFixed(2)}`;
};

/**
 * Formats a number with commas as thousands separators.
 * @param num - The number to format.
 * @returns A formatted string with commas.
 */
export const formatNumberWithCommas = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Formats a percentage value.
 * @param value - The percentage value to format.
 * @returns A formatted percentage string.
 */
export const formatPercentage = (value: number): string => {
    return `${value.toFixed(2)}%`;
};