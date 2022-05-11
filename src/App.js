import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommingSoon, MainLayout } from "./components";
import {
  AboutPage,
  BlogPage,
  HomePage,
  NotFoundPage,
  PlaygroundPage,
  PortfolioPage,
  SquigglyPage,
} from "./pages";
import { Worker } from "@react-pdf-viewer/core";
import "./App.scss";
import { useBreakout } from "./hooks";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const screenType = useBreakout();
  if (screenType === 'mobile') return <CommingSoon customMessage='Mobile UI is updating...'/>
  return (
    <BrowserRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <MainLayout>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/squiggly" element={<SquigglyPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          
        </MainLayout>
      </Worker>
    </BrowserRouter>
  );
}

export default App;
