import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import "./css/index.css";
import Section from "./components/Section";
import { hotSection, juicySection, cosySection } from "./assets/SectionText";
import { hotMenu, infoTable, juicyMenu } from "./assets/TableData";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <Section
        id="hot"
        className="hot-section section"
        imgSrc="/hot.jpg"
        sectionText={hotSection}
        tableData={hotMenu}
      />
      <Section
        id="juicy"
        className="juicy-section section"
        imgSrc="/juicy.jpg"
        sectionText={juicySection}
        tableData={juicyMenu}
      />
      <Section
        id="cosy"
        className="cosy-section section"
        imgSrc="/cosy.jpg"
        sectionText={cosySection}
        tableData={infoTable}
      />
    </main>
  </StrictMode>
);
