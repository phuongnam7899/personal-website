import { Banner, Projects } from "./components";
import "./index.scss";

export const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Banner />
      <Projects/>
    </div>
  );
};
