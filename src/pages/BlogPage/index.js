import { HotPost, PostPreview } from "./components";
import Masonry from "@mui/lab/Masonry";
import "./index.scss";

export const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="left-section">
        <Masonry columns={2} spacing={4}>
          <PostPreview
            content="Phát hiện chú chó màu cam mắt đang liếc..."
            tags={["#Tag1", "#Tag2"]}
            title="Phát hiện chú chó mắt liếc"
          />
          <PostPreview
            content="Phát hiện chú chó màu cam mắt đang liếc Phát hiện chú chó màu cam mắt đang liếc Phát hiện chú chó màu cam mắt đang liếc..."
            tags={["#Tag1", "#Tag2"]}
            title="Phát hiện chú chó mắt liếc"
          />
          <PostPreview
            content="Phát hiện chú chó màu cam mắt đang liếc..."
            tags={["#Tag1", "#Tag2"]}
            title="Phát hiện chú chó mắt liếc"
            previewImg="https://www.liveabout.com/thmb/Mic8lTNtkinmYKp9F4AQ5ArxQH0=/478x478/smart/filters:no_upscale()/dog-mem-wink-571fa6d55f9b58857d2751bb.jpg"
          />
          <PostPreview
            content="Phát hiện chú chó màu cam mắt đang liếc..."
            tags={["#Tag1", "#Tag2"]}
            title="Phát hiện chú chó mắt liếc"
            previewImg="https://images.hindustantimes.com/img/2021/11/03/550x309/Doge_meme_dog_birthday_1635925455510_1635925462309.PNG"
          />
                   <PostPreview
            content="Phát hiện chú chó màu cam mắt đang liếc..."
            tags={["#Tag1", "#Tag2"]}
            title="Phát hiện chú chó mắt liếc"
          />
          <PostPreview
            content="Phát hiện chú chó màu cam mắt đang liếc Phát hiện chú chó màu cam mắt đang liếc Phát hiện chú chó màu cam mắt đang liếc..."
            tags={["#Tag1", "#Tag2"]}
            title="Phát hiện chú chó mắt liếc"
          />
          <PostPreview
            content="Phát hiện chú chó màu cam mắt đang liếc..."
            tags={["#Tag1", "#Tag2"]}
            title="Phát hiện chú chó mắt liếc"
            previewImg="https://www.liveabout.com/thmb/Mic8lTNtkinmYKp9F4AQ5ArxQH0=/478x478/smart/filters:no_upscale()/dog-mem-wink-571fa6d55f9b58857d2751bb.jpg"
          />
          <PostPreview
            content="Phát hiện chú chó màu cam mắt đang liếc..."
            tags={["#Tag1", "#Tag2"]}
            title="Phát hiện chú chó mắt liếc"
            previewImg="https://images.hindustantimes.com/img/2021/11/03/550x309/Doge_meme_dog_birthday_1635925455510_1635925462309.PNG"
          />
        </Masonry>
      </div>
      <div className="right-section">
          <HotPost/>
      </div>
    </div>
  );
};
