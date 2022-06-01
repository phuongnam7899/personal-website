import { Masonry } from "@mui/lab";
import { posts } from "../../data/posts";
import { PostPreview } from "../PostPreview";
import './index.scss';

export const Posts = () => {
  return (
    <>
    <div className="blog-note"><i class="fas fa-flag"></i> Note: Cause my blog's target audience now is only Vietnamese, all posts are in Vietnamese only</div>
    <Masonry columns={2} spacing={4}>
      {posts.map((post) => {
        return <PostPreview post={post} />;
      })}
    </Masonry>
    </>
  );
};
