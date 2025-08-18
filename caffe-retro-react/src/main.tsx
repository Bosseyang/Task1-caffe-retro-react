import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import "./css/index.css";
import Section from "./components/Section";
import { HotSection, JuicySection, CosySection } from "./assets/SectionText";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <Section
        id="hot"
        className="hot-section section"
        imgSrc="/hot.jpg"
        sectionText={HotSection}
      />
      <Section
        id="juicy"
        className="juicy-section section"
        imgSrc="/juicy.jpg"
        sectionText={JuicySection}
      />
      <Section
        id="cosy"
        className="cosy-section section"
        imgSrc="/cosy.jpg"
        sectionText={CosySection}
      />
    </main>
  </StrictMode>
);
