import { CtaButton } from "@components";
import { DoubleImageReveal } from "../DoubleImageReveal";
import img1 from "./image-1.jpg";
import img2 from "./image-2.jpg";
import img3 from "./image-3.jpg";
import img4 from "./image-4.jpg";
import "./index.scss";

const images = [img1, img2, img3, img4];

export const Banner = () => {
  return (
    <div className="banner">
      <div className="intro">
        <div className="welcome">Welcome to</div>
        <div className="web-name">nklm</div>
        <div className="description">
          My life mission: explore weird/interesting/helpful things in life
        </div>
        <CtaButton to="/about">
          About me <i class="fas fa-long-arrow-alt-right"></i>
        </CtaButton>
      </div>
      <DoubleImageReveal images={images} width={35 * 16} height={35 * 16} />
    </div>
  );
};
