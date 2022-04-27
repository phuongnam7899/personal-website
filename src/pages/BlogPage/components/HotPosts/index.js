import "./index.scss";

export const HotPost = () => {
  return (
    <div className="hot-posts-section">
      <div className="section-title">Hot Posts</div>
      <div className="hot-posts">
        <HotPostPreview
          number="1"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat egestas orci at placerat"
          date="01 Mar 2022"
        />
        <HotPostPreview
          number="2"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat egestas orci at placerat"
          date="01 Mar 2022"
        />
        <HotPostPreview
          number="3"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat egestas orci at placerat"
          date="01 Mar 2022"
        />
        <HotPostPreview
          number="4"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat egestas orci at placerat"
          date="01 Mar 2022"
        />
      </div>
    </div>
  );
};

const HotPostPreview = ({ number, title, date }) => {
  return (
    <div className="hot-post-preview">
      <div className="number">{number}</div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};
