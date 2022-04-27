import { CtaButton } from "../../../../components";
import { DoubleImageReveal } from "../DoubleImageReveal";
import img1 from "./image-1.jpg";
import img2 from "./image-2.jpg";
import "./index.scss";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="intro">
        <div className="welcome">Welcome to</div>
        <div className="web-name">nklm</div>
        <div className="description">
          My life mission: explore weird/interesting/helpful things in life
        </div>
        <CtaButton to='/about'>
          About me <i class="fas fa-long-arrow-alt-right"></i>
        </CtaButton>
      </div>
      <DoubleImageReveal
        imgTop={img1}
        imgBack={img2}
        width={35 * 16}
        height={35 * 16}
      />
    </div>
  );
};
