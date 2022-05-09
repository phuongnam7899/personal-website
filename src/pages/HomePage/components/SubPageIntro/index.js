import { Link } from "react-router-dom";
import { FlipCard, FlipCardBack, FlipCardFront } from "@components";
import "./index.scss";

export const SubPageIntro = () => {
  return (
    <div className="sub-page-intro">
      <FlipCard
        customStyle={{ margin: "0 1rem", width: "17.5rem", height: "17.5rem" }}
      >
        <FlipCardFront>
          <div className="sub-page-intro-item ">
            <i class="fas fa-search big-icon"></i>
            <div className="intro">If you're recruiter...</div>
          </div>
        </FlipCardFront>
        <FlipCardBack>
          <Link to="/portfolio" className="sub-page-intro-item back">
            <i className="far fa-file-alt big-icon"></i>
            <div className="intro">
              Check out my portfolio to know what I’ve worked on
            </div>
          </Link>
        </FlipCardBack>
      </FlipCard>
      <FlipCard customStyle={{ margin: "0 1rem", width: "17.5rem", height: "17.5rem" }}>
        <FlipCardFront>
          <div className="sub-page-intro-item">
            <i class="fas fa-info-circle big-icon"></i>
            <div className="intro">
              If you're looking for something helpful & interesting...
            </div>
          </div>
        </FlipCardFront>
        <FlipCardBack>
          <Link to="/blog" className="sub-page-intro-item back">
            <i class="fas fa-pen-nib big-icon"></i>
            <div className="intro">See what I found in my blog</div>
          </Link>
        </FlipCardBack>
      </FlipCard>
      <FlipCard customStyle={{ margin: "0 1rem", width: "17.5rem", height: "17.5rem" }}>
        <FlipCardFront>
          <div className="sub-page-intro-item">
            <i class="far fa-smile big-icon"></i>
            <div className="intro">Or if you just need some fun...</div>
          </div>
        </FlipCardFront>
        <FlipCardBack>
          <Link to="/playground" className="sub-page-intro-item back">
            <i class="far fa-laugh-squint big-icon"></i>
            <div className="intro">Let's go to playground!</div>
          </Link>
        </FlipCardBack>
      </FlipCard>
      {/* <Link to="/blog" className="sub-page-intro-item">
        
        <div className="intro">See what I found in my blog</div>
      </Link>
      <Link to="/playground" className="sub-page-intro-item">
        <i class="far fa-laugh-squint big-icon"></i>
        <div className="intro">Let's go to playground!</div>
      </Link> */}
    </div>
  );
};
