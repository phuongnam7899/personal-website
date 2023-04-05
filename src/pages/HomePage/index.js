import { CommingSoon } from "@components";
import { useContext, useEffect } from "react";
import { AppContext } from "src/context";
import { useBreakout } from "../../hooks";
import { Banner, SubPageIntro } from "./components";

import "./index.scss";

export const HomePage = () => {
  const { t } = useContext(AppContext);
  const screenType = useBreakout();
  if (screenType !== "desktop-l")
    return (
      <CommingSoon
        customMessage={t("UI for <1024px screen is being updated...")}
      />
    );
  return (
    <div>
      <Banner />
      <SubPageIntro />
    </div>
  );
};
