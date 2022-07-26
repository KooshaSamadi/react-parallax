import React from "react";
import { Parallax } from "react-parallax";
import imageOne from "../../assets/imageOne.jpg";
const ImageOne = () => {
  return (
    <Parallax
      className="image"
      bgImage={imageOne}
      bgImageAlt="SpaceX Falcon Heavy Launch"
      strength={500}
    >
      <div className="content">SpaceX Falcon Heavy Launch</div>
    </Parallax>
  );
};

export default ImageOne;
