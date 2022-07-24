import { useEffect, useState } from "react";
import { useMousePositionInElement } from "@hooks";
import "./index.scss";

export const DoubleImageReveal = ({ images, width, height }) => {
  const [topImageWidthPercentage, setTopImageWidthPercentage] = useState(100);
  const {
    elementRef,
    mousePosition: { x },
  } = useMousePositionInElement({ x: width / 2 });
  const [imgTopIndex, setImgTopIndex] = useState(0);
  const [imgBackIndex, setImgBackIndex] = useState(1);

  const getNextImageIndex = () => {
    const imagesIndex = images.map((_img, index) => index);
    const availableIndexes = imagesIndex.filter(
      (index) => index !== imgBackIndex && index !== imgTopIndex
    );
    const randomIndex = Math.round(
      Math.random() * (availableIndexes.length - 1)
    );
    return availableIndexes[randomIndex];
  };

  useEffect(() => {
    if (x < 4) {
      setTopImageWidthPercentage(0);
    } else if (x > width - 4) {
      setTopImageWidthPercentage(100);
    } else setTopImageWidthPercentage((x / width) * 100);
  }, [x]);

  useEffect(() => {
    if (topImageWidthPercentage === 0) {
      setTimeout(() => {
        setImgTopIndex(getNextImageIndex());
      }, 100);
    } else if (topImageWidthPercentage === 100) {
      setTimeout(() => {
        setImgBackIndex(getNextImageIndex());
      }, 100);
    }
  }, [topImageWidthPercentage]);

  return (
    <div
      ref={elementRef}
      style={{
        width,
        height,
      }}
      className="images-container"
    >
      <img src={images[imgBackIndex]} />
      <img
        style={{
          width: `${topImageWidthPercentage}%`,
        }}
        src={images[imgTopIndex]}
      />
    </div>
  );
};
