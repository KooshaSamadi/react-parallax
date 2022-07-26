import React from "react";
import { Parallax } from "react-parallax";
import imageTwo from "../../assets/imageTwo.jpg";
const ImageTwo = () => {
  return (
    <Parallax
      className="image"
      bgImage={imageTwo}
      bgImageAlt="Ocean clouds seen from space"
      strength={500}
    >
      <div className="content">Ocean clouds seen from space</div>
    </Parallax>
  );
};

export default ImageTwo;
