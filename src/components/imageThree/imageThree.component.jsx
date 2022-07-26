import React from "react";
import { Parallax } from "react-parallax";
import imageThree from "../../assets/imageThree.jpg";
const ImageThree = () => {
  return (
    <Parallax
      className="image"
      bgImage={imageThree}
      bgImageAlt="The summer night sky "
      strength={500}
    >
      <div className="content">The summer night sky </div>
    </Parallax>
  );
};

export default ImageThree;
