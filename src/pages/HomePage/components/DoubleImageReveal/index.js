import { useEffect, useState } from "react";
import { useMousePositionInElement } from "../../../../hooks";
import "./index.scss";

export const DoubleImageReveal = ({ imgTop, imgBack, width, height }) => {
  const [topImageWidthPercentage, setTopImageWidthPercentage] = useState(100);
  const { elementRef, mousePosition: {x} } = useMousePositionInElement({x: width / 2});

  useEffect(() => {
    if (x < 4) setTopImageWidthPercentage(0);
    else if (x > width - 4) setTopImageWidthPercentage(100);
    else setTopImageWidthPercentage((x / width) * 100);
  }, [x]);

  return (
    <div
      ref={elementRef}
      style={{
        width,
        height,
      }}
      className="images-container"
    >
      <img src={imgBack} />
      <img
        style={{
          width: `${topImageWidthPercentage}%`,
        }}
        src={imgTop}
      />
    </div>
  );
};
