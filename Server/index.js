const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const {generateColors} = require( "./Util/colorGen")
const {luminocitySort} = require( "./Util/luminocitySort")

app.use(cors());
app.options("*", cors());

const fs = require("fs"),
  { createCanvas } = require("canvas");

let rgbArray = generateColors(8);

const canvas = createCanvas(128, 256);
const ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let sortedArray = luminocitySort(rgbArray);

ctx.clearRect(0, 0, canvasWidth, canvasHeight);
let id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
let pixels = id.data;

//Iterates over my Canvas and places the pixels from my array
for (let i = 0; i < sortedArray.length; i++) {
  let x = +i;
  let y = 0;
  let r = sortedArray[i].red;
  let g = sortedArray[i].green;
  let b = sortedArray[i].blue;
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

app.get("/image", (req, res) => {
  res.sendFile(__dirname + "/image/32kcolors.png");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
