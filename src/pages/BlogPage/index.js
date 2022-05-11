import { HotPost, PostDetail, Posts } from "./components";
import "./index.scss";
import { Route, Routes } from "react-router-dom";

export const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="left-section">
        <Routes>
          <Route path="" element={<Posts/>}/>
          <Route path=":slug" element={<PostDetail/>}/>
        </Routes>
      </div>
      <div className="right-section">
        <HotPost />
      </div>
    </div>
  );
};
