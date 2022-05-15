import { Masonry } from "@mui/lab";
import { posts } from "../../data/posts";
import { PostPreview } from "../PostPreview";

export const Posts = () => {
  return (
    <Masonry columns={2} spacing={4}>
      {posts.map((post) => {
        return <PostPreview post={post} />;
      })}
    </Masonry>
  );
};
