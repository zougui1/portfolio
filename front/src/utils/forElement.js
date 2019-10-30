export const forElement = (iterations, callback) => {
  const elements = [];

  for (let i = 0; i < iterations; i++) {
    elements.push(callback(i));
  }

  return elements;
}
