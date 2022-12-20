import React, { useRef, useLayoutEffect } from "react";
import Wrapper from "../wrappers/Wrapper";
import IMAGES from "../../data/galleryImages.js";

function GallerySection() {
  const imageNum = useRef(0);
  const canvasRef = useRef(null);
  const hiddenImg = useRef(null);
  const prevImage = useRef(null);
  const prevPosition = useRef(null);
  const prevContext = useRef(null);
  const createImages = async (event) => {
    const mouseMoveDistance = () =>
      Math.hypot(event.movementX, event.movementY);
    if (mouseMoveDistance() > 10 || event.type === "click") {
      if (imageNum.current === IMAGES.length) {
        imageNum.current = 0;
      }
      const image =
        hiddenImg.current.querySelectorAll("img")[imageNum.current++];
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      function resizeImage() {
        const ratio = devicePixelRatio || 1;
        canvas.width = innerWidth * ratio;
        canvas.height = innerHeight * ratio;
      }

      if (!prevImage.current) {
        onresize = resizeImage();
      }
      let posx = prevPosition.current?.offx;
      let posy = prevPosition.current?.offy;
      const offx = event.nativeEvent.offsetX;
      const offy = event.nativeEvent.offsetY;
      if (prevContext.current) {
        prevContext.current.fillStyle = "#E4E4E4";
        await prevContext.current.fillRect(
          posx,
          posy,
          prevImage.current.width,
          prevImage.current.height
        );
      }
      await context.drawImage(image, offx, offy, image.width, image.height);
      prevPosition.current = { offx: offx, offy: offy };
      prevImage.current = image;
      prevContext.current = context;
    }
  };

  return (
    <Wrapper>
      <div ref={hiddenImg} className="hidden">
        {IMAGES.map((image, index) => (
          <img key={index} src={image.image} />
        ))}
      </div>
      <div className="" id="canva">
        <canvas
          ref={canvasRef}
          className="h-[856px] max-h-screen mb-[111px] scale-100 w-full mx-auto border-2 "
          onClick={createImages}
          onMouseMove={createImages}
          onLoad={createImages}
        ></canvas>
      </div>
    </Wrapper>
  );
}

export default GallerySection;
