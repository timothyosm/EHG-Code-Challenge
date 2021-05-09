import luminocitySort from "./luminocitySort";
import generateColors from "./colorGen";

test("Should output 32768 colors", () => {
  let rgbArray = generateColors(8);
  const sortedArray = luminocitySort(rgbArray);
  expect(sortedArray).toHaveLength(32768);
});

test("All Values must be unique", () => {
  const colors = generateColors(8);
  const isArrayUnique = (arr) =>
    Array.isArray(arr) && new Set(arr).size === arr.length; // add function to check that array is unique.

  expect(isArrayUnique(colors)).toBeTruthy();
});
