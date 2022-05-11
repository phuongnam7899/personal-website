import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../data";
import Slider from "react-slick";
import "./index.scss";

export const PostDetail = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sliderRef = useRef(null)
  const { slug } = useParams();
  const post = useMemo(() => {
    return posts.filter((post) => post.slug === slug)[0];
  }, [slug]);

  const sliderSettings = {
    arrows: false,
    autoplay: false,
    speed: 100,
    accessibility: false,
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 39) {
        sliderRef.current.slickNext()
    }
    else if (e.keyCode === 37) {
        sliderRef.current.slickPrev()
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)
    return () => {
        document.removeEventListener('keyup', handleKeyUp)
    }
  }, []);

  const pages = [
    <>1</>,
    <>2</>,
    <>3</>,
    <>4</>,
  ]

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <Slider className="pages" ref={(slider) => {sliderRef.current = slider}} {...sliderSettings}>
        {
          pages.map((page) => {
            return <div className="page">{page}</div>
          })
        }
      </Slider>
    </div>
  );
};
