import { CommingSoon } from "../../components";
import { useBreakout } from "../../hooks";
import { Banner, SubPageIntro } from "./components";

import "./index.scss";

export const HomePage = () => {
  const screenType = useBreakout()
  if (screenType !== 'desktop-l') return <CommingSoon customMessage='UI for <1024px screen is updating...'/>
  return (
    <div>
      <Banner/>
      <SubPageIntro/>
    </div>
  );
};
