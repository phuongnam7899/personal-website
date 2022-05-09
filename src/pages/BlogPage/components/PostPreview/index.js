import { Chip } from "@components";
import "./index.scss";

export const PostPreview = ({ previewImg, tags, title, content }) => {
  return (
    <div className="post-preview">
      {previewImg && <img src={previewImg} />}
      <div className="content">
        <div className="tags">
          {tags.map((tag) => {
            return <Chip>{tag}</Chip>;
          })}
        </div>
        <div className="post-title">{title}</div>
        <div className="post-description">{content}</div>
      </div>
    </div>
  );
};
