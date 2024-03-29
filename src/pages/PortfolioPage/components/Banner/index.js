import cv from "./CV.pdf";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Dialog, DialogActions } from "@components";
import _ from "lodash";
import { CV } from "./components/CV";

const avatarImgs = [
  "https://i.pinimg.com/564x/7e/3f/4c/7e3f4c60496ce171c102fd2bea7013ce--so-funny-funny-shit.jpg",
  "https://i.pinimg.com/564x/1f/12/f9/1f12f998ab7e5cb637b80b79670754f4.jpg",
  "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2021/11/04/e1136cce-3c64-11ec-a1b3-e785d5c8830c_image_hires_134310.jpg?itok=gms-Ro-v&v=1636004597",
  "https://i.imgflip.com/4/4t0m5.jpg",
  "https://png.pngitem.com/pimgs/s/470-4706159_dog-meme-funny-puppy-sunglasses-freetoedit-dog-meme.png",
];
export const Banner = () => {
  const [showCV, setShowCV] = useState(false);
  const memorizedCV = useMemo(() => {
    return (
      <Dialog
        onCloseDialog={() => {
          setShowCV(false);
        }}
      >
        <div className="cv">
          <CV />
        </div>
      </Dialog>
    );
  }, []);

  const [currentAvatar, setCurrentAvatar] = useState();
  const [skipChangeAvatar, setSkipChangeAvatar] = useState(false);

  const changeAvatarIntervalRef = useRef();

  const changeAvatar = () => {
    if (!skipChangeAvatar) {
      let randomAvatar;
      do {
        randomAvatar = _.sample(avatarImgs);
      } while (randomAvatar === currentAvatar);
      setCurrentAvatar(randomAvatar);
    }
    setSkipChangeAvatar(!skipChangeAvatar);
  };

  useEffect(() => {
    changeAvatarIntervalRef.current = setInterval(() => {
      changeAvatar();
    }, 5000);
    return () => {
      changeAvatarIntervalRef.current &&
        clearInterval(changeAvatarIntervalRef.current);
    };
  });

  return (
    <div className="portfolio-banner">
      <div className="avatar-container">
        <div
          style={{
            backgroundImage:
              "url(https://www.nicepng.com/png/full/945-9450660_italian-pizzeria-just-for-kids-margarita-pizza-png.png)",
          }}
          className="avatar"
        ></div>
        <div
          style={{
            backgroundImage: currentAvatar ? `url(${currentAvatar})` : "none",
          }}
          className="avatar-placeholder"
        >
          <span>{!currentAvatar ? "Wait for the pizza..." : ""}</span>
        </div>
      </div>

      <div className="text">Hi, I'm Nam</div>
      <h3 className="text">I want to maximize the product outcomes</h3>
      <div className="text">
        1-year experience in product management roles (PO, PM Trainee) and
      </div>
      <div className="text">
        2+ years in others roles of product team (UX/UI, Developer)
      </div>
      <div className="text">I'm really interested in game industry</div>
      {/* <div className="text">more and can be more...</div> */}
      <div className="btns-container">
        {/* <a
          onClick={() => {
            setShowCV(true);
          }}
          className="btn view-cv-btn"
        >
          View my CV
        </a> */}
        <a className="btn view-prj-btn" href="#projects-section">
          See my works
        </a>
      </div>
      {/* {showCV && memorizedCV} */}
    </div>
  );
};
