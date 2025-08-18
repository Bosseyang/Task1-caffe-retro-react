import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import "./css/index.css";
import Section from "./components/Section";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <Section />
    </main>
  </StrictMode>
);
