function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string') {
    a = parseFloat(a);
  }
  if (typeof b === 'string') {
    b = parseFloat(b);
  }
  return a + b;
}

let result1 = addSafe(10, "20"); //Correct handling of string and numbers
let result2 = add(10, 20); // Correct usage