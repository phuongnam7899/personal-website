import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { posts } from "../../data/posts";
import { useLocalStorage } from "@hooks";
import "./index.scss";
import { IconWithTooltip, Loading } from "../../../../components";
import { FirestoreArticle } from "../../../../apis/articles";
import { CommentsSection } from "./components";
import { HotPost } from "../HotPosts";

export const PostDetail = () => {
  const [viewMode, setViewMode] = useLocalStorage("postViewMode", "line");
  const sliderRef = useRef(null);
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [firebaseArticle, setFirebaseArticle] = useState(
    new FirestoreArticle({ slug })
  );

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

  useEffect(() => {
    setLoading(true);
    sliderRef.current && sliderRef.current.slickGoTo(0);
    firebaseArticle.updateLastestFromDbBySlug().then(() => {
      setLoading(false);
      setFirebaseArticle(firebaseArticle);
    });
  }, [slug]);

  const handleAddComment = (commentContent) => {
    firebaseArticle.addComment(commentContent);
  };

  const displayedPages = useMemo(() => {
    return [
      ...post.pagesVi,
      viewMode === "card" ? (
        <>
          <span>Hết.</span>
          <span>
            {" "}
            Bấm <i class="fas fa-long-arrow-alt-right"></i> để quay lại trang
            đầu
          </span>
        </>
      ) : (
        <></>
      ),
    ];
  }, [viewMode, post.pagesVi]);

  return (
    <div className="post-detail">
      <div className="article">
        <div className="post-header">
          <h2 className="post-title">{post.title.vi}</h2>
          <div className="view-mode">
            <div className="toggle">
              <span
                onClick={() => {
                  setViewMode("line");
                }}
                className={viewMode === "line" ? "active" : ""}
              >
                <IconWithTooltip
                  tooltipContent={
                    viewMode === "card"
                      ? "Use arrow keys (← / →) to change page"
                      : "Read up to down like other pages"
                  }
                >
                  <i class="fas fa-align-left"></i>
                </IconWithTooltip>
              </span>

              <span
                className={viewMode === "card" ? "active" : ""}
                onClick={() => {
                  setViewMode("card");
                }}
              >
                <IconWithTooltip
                  tooltipContent={
                    viewMode === "card"
                      ? "Use arrow keys (← / →) to change page"
                      : "Read up to down like other pages"
                  }
                >
                  <i class="far fa-square"></i>
                </IconWithTooltip>
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
        <div>
          {loading ? (
            <Loading />
          ) : (
            <CommentsSection
              comments={firebaseArticle.comments}
              addComment={handleAddComment}
            />
          )}
        </div>
      </div>
      <div className="right-section"><HotPost/></div>
    </div>
  );
};
