export default function luminocitySort(array) {
  //Using formula from below
  //https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color

  //Sorts my array of RGB values based on Luminance
  const sumColor = (rgb) => {
    //I needed to linearization my RGB values
    var Rlin = (rgb.red / 256.0) ** 2.218;
    var Glin = (rgb.green / 256.0) ** 2.218;
    var Blin = (rgb.blue / 256.0) ** 2.218;

    var Ylum = Rlin * 0.2126 + Glin * 0.7152 + Blin * 0.0722; // convert to Luminance

    return Math.pow(Ylum, 0.43) * 100;
  };
  //Sorts the above array by luminance
  return array.sort((a, b) => sumColor(a) - sumColor(b)).reverse();
}

