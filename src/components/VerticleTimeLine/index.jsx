import "./index.scss";

const VerticleTineLineItem = (props) => {
  return (
    <div className="item">
      <img src="https://upload.wikimedia.org/wikipedia/vi/5/5f/Original_Doge_meme.jpg" />
      <div className="dot"></div>
      <div className="description">
        <div className="time">08/08/1999</div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          pretium ante.{" "}
        </div>
      </div>
    </div>
  );
};

export const VerticleTineLine = (props) => {
  return (
    <div className="verticle-time-line-container">
      <div className="line-layer"></div>
      <div className="items-layer">
        {[1, 2, 3, 4, 5].map((item) => (
          <VerticleTineLineItem />
        ))}
      </div>
    </div>
  );
};
