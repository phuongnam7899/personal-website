import { Link } from "react-router-dom";
import { hotPosts } from "../../data/posts";
import "./index.scss";


export const HotPost = () => {
  return (
    <div className="hot-posts-section">
      <div className="section-title">Highlighted Posts</div>
      <div className="hot-posts">
        {
          hotPosts.map((post, index) => {
            return <HotPostPreview number={index + 1} {...post}/>
          })
        }
      </div>
    </div>
  );
};

const HotPostPreview = ({ number, title, slug }) => {
  return (
    <Link to={`/blog/${slug}`}>
    <div className="hot-post-preview">
      <div className="number">{number}</div>
      <div className="content">
        <div className="title">{title.vi}</div>
      </div>
    </div>
    </Link>
  );
};
