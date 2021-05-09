const { luminocitySort } = require("./luminocitySort");
const { generateColors } = require("./colorGen");

test("Should output 32768 colors", () => {
  let rgbArray = generateColors(8);
  const sortedArray = luminocitySort(rgbArray);
  expect(sortedArray).toHaveLength(32768);
});
