import Masonry from "@mui/lab/Masonry";
import { useState } from "react";
import { Dialog } from "../../components";
import { useBreakout } from "../../hooks";
import { squigglyPicture } from "../BlogPage/data/squiggly";
import './index.scss';

export const SquigglyPage = () => {
  const screenType = useBreakout();
  const [selectedPic, setSelectedPic] = useState(undefined);
  return (
    <div
    className="squiggly-page"
    >
      <Masonry
        columns={["desktop-l", "desktop"].includes(screenType) ? 2 : 1}
        spacing={4}
      >
        {squigglyPicture.map((pic) => {
          return <img className="picture" src={pic} onClick={() => {setSelectedPic(pic)}}/>;
        })}
      </Masonry>
      {selectedPic && (
        <Dialog
          onCloseDialog={() => {
            setSelectedPic(undefined);
          }}
        >
          <img src={selectedPic} className="selected-img"/>
        </Dialog>
      )}
    </div>
  );
};
