export default function generateColors(i) {
  let red;
  let green;
  let blue;
  let rgbArray = [{ red: 0, green: 0, blue: 0 }];
  //Generates all 32768 colors and stores them in an array
  for (red = 0; red <= 255; red += i) {
    if (red) rgbArray.push({ red: red, green: green, blue: blue });
    for (green = 0; green <= 255; green += i) {
      if (green) rgbArray.push({ red: red, green: green, blue: blue });
      for (blue = 0; blue <= 255; blue += i) {
        if (blue) rgbArray.push({ red: red, green: green, blue: blue });
      }
    }
  }

  return rgbArray;
}
