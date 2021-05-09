import { React, useEffect } from "react";
import generateColors from "../Util/colorGen";
import luminocitySort from "./../Util/luminocitySort";

function LocalImg() {
  useEffect(() => {
    let rgbArray = generateColors(8);
    let sortedArray = luminocitySort(rgbArray);

    //Setting up my Canvas
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

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
  }, []);

  return <canvas id="canvas" height="256x" width="128px"></canvas>;
}

export default LocalImg;
