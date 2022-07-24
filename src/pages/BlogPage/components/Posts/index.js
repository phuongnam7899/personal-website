import { Masonry } from "@mui/lab";
import { useBreakout } from "@hooks";
import { posts } from "../../data/posts";
import { PostPreview } from "../PostPreview";
import "./index.scss";
import { useContext } from "react";
import { AppContext } from "src/context";

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
  const { t } = useContext(AppContext);
  return (
    <>
      <div className="blog-note">
        <i class="fas fa-flag"></i>{" "}
        {t(
          "Note: Cause my blog's target audience now is only Vietnamese, all articles are in Vietnamese only"
        )}
      </div>
      <Masonry {...mansonrySettingByScreenType[screenType]}>
        {posts.map((post) => {
          return <PostPreview post={post} />;
        })}
      </Masonry>
    </>
  );
};
