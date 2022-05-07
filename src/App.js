import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components";
import {
  AboutPage,
  BlogPage,
  HomePage,
  NotFoundPage,
  PlaygroundPage,
  PortfolioPage,
} from "./pages";
import { Worker } from "@react-pdf-viewer/core";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
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
