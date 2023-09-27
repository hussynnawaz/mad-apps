/* 
Suppose you want to solve the following equation:
Z = x
2 + 4y2 – 8y + 2x
Use the arrow function to solve this equation by passing the values of x and y as arguments. 
*/
const solveEquation = (x, y) => {
    const Z = x ** 2 + 4 * y ** 2 - 8 * y + 2 * x;
    return Z;
  };
  const xValue = 5;
  const yValue = 2;
  const result = solveEquation(xValue, yValue);
  console.log(`Z = ${result}`);
  