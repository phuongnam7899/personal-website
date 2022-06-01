import { Chip } from "@components";
import { Link } from "react-router-dom";
import "./index.scss";

export const PostPreview = ({post}) => {
  const { previewImg, tags, title, intro, slug } = post;
  return (
    <Link to={`/blog/${slug}`} className="post-preview">
      {previewImg && <img src={previewImg} />}
      <div className="content">
        <div className="tags">
          {tags.map((tag) => {
            return <Chip>{tag}</Chip>;
          })}
        </div>
        <div className="post-title">{title.vi}</div>
        <div className="post-description">{intro.vi}</div>
      </div>
    </Link>
  );
};
