import { add as sharedAdd } from 'shared';

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function add(a: number, b: number): number {
  return sharedAdd(a, b);
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

export { divide, add, subtract, multiply };