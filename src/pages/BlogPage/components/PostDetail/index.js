import { useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { posts } from "../../data/posts";
import { useLocalStorage } from "@hooks";
import "./index.scss";
import { IconWithTooltip } from "../../../../components";
import { P } from "./components";

export const PostDetail = () => {
  const [viewMode, setViewMode] = useLocalStorage("postViewMode", "line");
  const sliderRef = useRef(null);
  const { slug } = useParams();
  const post = useMemo(() => {
    return posts.filter((post) => post.slug === slug)[0];
  }, [slug]);

  const sliderSettings = {
    arrows: false,
    autoplay: false,
    speed: 200,
    accessibility: false,
    draggable: false,
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 39) {
      sliderRef.current.slickNext();
    } else if (e.keyCode === 37) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const displayedPages = useMemo(() => {
    return [
      ...post.pagesVi,
      viewMode === 'card' ? <>
        <span>Hết.</span>
        <span>
          {" "}
          Bấm <i class="fas fa-long-arrow-alt-right"></i> để quay lại trang đầu
        </span>
      </> : <></>,
    ];
  }, [viewMode, post.pagesVi]);

  return (
    <div className="post-detail">
      <div className="post-header">
        <h2 className="post-title">{post.title.vi}</h2>
        <div className="view-mode">
          <div className="toggle">
            <span
              className={viewMode === "line" ? "active" : ""}
              onClick={() => {
                setViewMode("line");
              }}
            >
              <i class="fas fa-align-left"></i>
            </span>
            <span
              className={viewMode === "card" ? "active" : ""}
              onClick={() => {
                setViewMode("card");
              }}
            >
              <i class="far fa-square"></i>
            </span>
          </div>
          <IconWithTooltip
            icon="question"
            tooltipContent={
              viewMode === "card"
                ? "Use arrow keys (← / →) to change page"
                : "Read up to down like other pages"
            }
          />
        </div>
      </div>
      {viewMode === "card" ? (
        <Slider
          className="pages"
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...sliderSettings}
        >
          {displayedPages.map((page) => {
            return <div className="card-page">{page}</div>;
          })}
        </Slider>
      ) : (
        <div>
          {displayedPages.map((page) => {
            return <div className="line-page">{page}</div>;
          })}
        </div>
      )}
    </div>
  );
};
