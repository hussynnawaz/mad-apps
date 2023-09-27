const calculateN = (p, z, q, r, s) => {
    return p ** 2 * z + r * q ** 2 + s;
  };
  
  const calculateZ = (x, y, p, z, q, r, s) => {
    const N = calculateN(p, z, q, r, s);
    const Z = x ** 2 + 4 * y ** 2 - 8 * N + 2 * x;
    return Z;
  };
  
  const xValue = 16;
  const yValue = 2;
  const pValue = 1;
  const zValue = 1;
  const qValue = 2;
  const rValue = 3;
  const sValue = 5;
  
  const result = calculateZ(xValue, yValue, pValue, zValue, qValue, rValue, sValue);
  console.log(`Z = ${result}`);
  