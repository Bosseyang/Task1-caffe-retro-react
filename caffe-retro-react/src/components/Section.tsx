import type { ReactElement } from "react";

interface ISection {
  image: string;
  h1: string;
  section: string;
}

export default function Section(): ReactElement {
  return (
    <section className="hot-section section" id="hot">
      <img
        src="../../public/hot.jpg"
        alt="Hot section background image"
        className="background-image Hot-section"
      />
      <section className="section-container"></section>
    </section>
  );
}
