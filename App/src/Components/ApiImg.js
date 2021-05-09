import axios from "axios";
import { React } from "react";

function ApiImg() {
  let image;
  axios
    .get("http://localhost:3000")
    .then((Response) => {
      image = Response;
    })
    .catch((error) => console.log(error));

  return <img src={image} alt="generated"></img>;
}

export default ApiImg;
