import { Link } from "react-router-dom";
import { posts } from "../../data/posts";
import "./index.scss";

const hotPostSlugs = [
  'release-notes-v-1-0-0',
  'react-folder-structure-for-small-medium-projects'
];

const hotPosts = posts.filter((post) => hotPostSlugs.includes(post.slug));

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
