import { Viewer } from "@react-pdf-viewer/core";
import cv from "./CV.pdf";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import './index.scss'
import { Dialog, Loading } from "@components";

export const Banner = () => {
  const [showCV, setShowCV] = useState(false);
  const memorizedCV = useMemo(() => {
    return (
      <Dialog>
      <div className="cv">
        <Viewer renderLoader={() => {
          return <Loading/>
        }} scrollMode="" fileUrl={cv} defaultScale={1.5} />
        <div className="actions">
          <button>
            <Link to={cv} target="_blank" download="CV-Nguyen-Phuong-Nam">
              <i class="fas fa-download"></i>
            </Link>
          </button>
          <button
            onClick={() => {
              setShowCV(false);
            }}
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      </Dialog>
    );
  }, []);

  return (
    <div className="portfolio-banner">
      <img
        className="avatar"
        src="https://i.pinimg.com/564x/7e/3f/4c/7e3f4c60496ce171c102fd2bea7013ce--so-funny-funny-shit.jpg"
      />
      <div className="text">Hi, i'm Nam</div>
      <h3 className="text">I want to design clean & usable products</h3>
      <div className="text">
        1.5-year experience in web development, 1 in UI/UX designing and Product
        Owning,
      </div>
      <div className="text">more and can be more...</div>
      <div className="btns-container">
        <a
          onClick={() => {
            setShowCV(true);
          }}
          className="btn view-cv-btn"
        >
          View my CV
        </a>
        <a className="btn view-prj-btn" href="#projects-section">See my work</a>
      </div>
      {showCV && memorizedCV}
    </div>
  );
};
