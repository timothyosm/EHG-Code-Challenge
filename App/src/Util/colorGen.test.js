import generateColors from "./colorGen";

test("Should output 32768 colors", () => {
  const colors = generateColors(8);
  expect(colors).toHaveLength(32768);
});
