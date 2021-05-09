const { generateColors } = require("./colorGen");

test("Should output 32768 colors", () => {
  const colors = generateColors(8);
  expect(colors).toHaveLength(32768);
});

test("All Values must be unique", () => {
  const colors = generateColors(8);
  const isArrayUnique = (arr) =>
    Array.isArray(arr) && new Set(arr).size === arr.length; // add function to check that array is unique.

  expect(isArrayUnique(colors)).toBeTruthy();
});
