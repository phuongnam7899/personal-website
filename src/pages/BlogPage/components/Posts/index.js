import { Masonry } from "@mui/lab";
import { useBreakout } from "@hooks";
import { posts } from "../../data/posts";
import { PostPreview } from "../PostPreview";
import "./index.scss";

const mansonrySettingByScreenType = {
  mobile: {
    columns: 1,
    spacing: 1,
  },
  tablet: {
    columns: 1,
    spacing: 3,
  },
  desktop: {
    columns: 2,
    spacing: 2,
  },
  "desktop-l": {
    columns: 2,
    spacing: 3,
  },
};

export const Posts = () => {
  const screenType = useBreakout();
  return (
    <>
      <Masonry {...mansonrySettingByScreenType[screenType]}>
        {posts.map((post) => {
          return <PostPreview post={post} />;
        })}
      </Masonry>
    </>
  );
};
