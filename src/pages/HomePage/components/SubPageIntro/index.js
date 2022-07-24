import { Link } from "react-router-dom";
import { FlipCard, FlipCardBack, FlipCardFront } from "@components";
import "./index.scss";
import { useContext } from "react";
import { AppContext } from "src/context";

export const SubPageIntro = () => {
  const { t } = useContext(AppContext);
  return (
    <div className="sub-page-intro">
      <FlipCard
        customStyle={{ margin: "0 1rem", width: "17.5rem", height: "17.5rem" }}
      >
        <FlipCardFront>
          <div className="sub-page-intro-item ">
            <i class="fas fa-search big-icon"></i>
            <div className="intro">{t("If you're recruiter...")}</div>
          </div>
        </FlipCardFront>
        <FlipCardBack>
          <Link to="/portfolio" className="sub-page-intro-item back">
            <i className="far fa-file-alt big-icon"></i>
            <div className="intro">
              {t("Check out my portfolio to know what I’ve worked on")}
            </div>
          </Link>
        </FlipCardBack>
      </FlipCard>
      <FlipCard
        customStyle={{ margin: "0 1rem", width: "17.5rem", height: "17.5rem" }}
      >
        <FlipCardFront>
          <div className="sub-page-intro-item">
            <i class="fas fa-info-circle big-icon"></i>
            <div className="intro">
              {t("If you're looking for something helpful & interesting...")}
            </div>
          </div>
        </FlipCardFront>
        <FlipCardBack>
          <Link to="/blog" className="sub-page-intro-item back">
            <i class="fas fa-pen-nib big-icon"></i>
            <div className="intro">{t("See what I found in my blog")}</div>
          </Link>
        </FlipCardBack>
      </FlipCard>
      <FlipCard
        customStyle={{ margin: "0 1rem", width: "17.5rem", height: "17.5rem" }}
      >
        <FlipCardFront>
          <div className="sub-page-intro-item">
            <i class="far fa-smile big-icon"></i>
            <div className="intro">{t("Wanna see what I drew?")}</div>
          </div>
        </FlipCardFront>
        <FlipCardBack>
          <Link to="/playground" className="sub-page-intro-item back">
            <i class="far fa-laugh-squint big-icon"></i>
            <div className="intro">{t("Let's go to squiggle ground!")}</div>
          </Link>
        </FlipCardBack>
      </FlipCard>
    </div>
  );
};
