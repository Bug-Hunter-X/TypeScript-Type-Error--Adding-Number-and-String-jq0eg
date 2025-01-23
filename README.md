# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript: attempting to add a number and a string.  The `add` function is defined to accept two numbers, but the code calls it with a number and a string, resulting in a type error.

The solution demonstrates how to use type guards or type assertions to handle the potential type mismatch and prevent this error.

## How to reproduce

1. Clone the repository
2. Navigate to the root directory
3. Compile the code using `tsc bug.ts`
4. Observe the compiler error.