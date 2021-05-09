const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.options("*", cors());

const fs = require("fs"),
  { createCanvas } = require("canvas");

let red;
let green;
let blue;
let rgbArray = [{ red: 0, green: 0, blue: 0 }];

for (red = 0; red <= 255; red += 8) {
  if (red) rgbArray.push({ red: red, green: green, blue: blue });
  for (green = 0; green <= 255; green += 8) {
    if (green) rgbArray.push({ red: red, green: green, blue: blue });
    for (blue = 0; blue <= 255; blue += 8) {
      if (blue) rgbArray.push({ red: red, green: green, blue: blue });
    }
  }
}

const canvas = createCanvas(128, 256);
const ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

const sumColor = (rgb) => {
  //I needed to linearization my RGB values
  var Rlin = (rgb.red / 256.0) ** 2.218;
  var Glin = (rgb.green / 256.0) ** 2.218;
  var Blin = (rgb.blue / 256.0) ** 2.218;

  var Ylum = Rlin * 0.2126 + Glin * 0.7152 + Blin * 0.0722; // convert to Luminance

  return Math.pow(Ylum, 0.43) * 100;
};

rgbArray.sort((a, b) => sumColor(a) - sumColor(b)).reverse();

ctx.clearRect(0, 0, canvasWidth, canvasHeight);
let id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
let pixels = id.data;

//Iterates over my Canvas and places the pixels from my array
for (let i = 0; i < rgbArray.length; i++) {
  let x = +i;
  let y = 0;
  let r = rgbArray[i].red;
  let g = rgbArray[i].green;
  let b = rgbArray[i].blue;
  let off = (y * id.width + x) * 4;
  pixels[off] = r;
  pixels[off + 1] = g;
  pixels[off + 2] = b;
  pixels[off + 3] = 255;
}

ctx.putImageData(id, 0, 0);

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./image/32kcolors.png", buffer);

ctx.putImageData(id, 0, 0);

app.get("/", (res) => {
  res.sendFile(__dirname + "/image/32kcolors.png");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
