import axios from "axios";
import { React, useState, useEffect } from "react";
import { Spin } from "antd";

function ApiImg() {
  const [image, setImage] = useState(null);

  // let imageURL;

  const fetch = () => {
    axios
      .get("http://localhost:3001/image", { responseType: "arraybuffer" })
      .then((response) => {
        let blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        let image = URL.createObjectURL(blob);
        setImage(image);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>{image ? <img src={image} alt="generated"></img> : <Spin />}</div>
  );
}

export default ApiImg;
