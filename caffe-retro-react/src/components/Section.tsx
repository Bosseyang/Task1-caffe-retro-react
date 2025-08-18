import type { ReactElement } from "react";
import type { ISectionText } from "../assets/SectionText";
import Textbox from "./Textbox";

interface ISectionProps {
  className: string;
  id: string;
  imgSrc: string;
  sectionText: ISectionText;
}

export default function Section(props: ISectionProps): ReactElement {
  const { className, id, imgSrc, sectionText } = props;
  return (
    <section className={className} id={id}>
      <img
        src={imgSrc}
        alt="${props.id} section background image"
        className="background-image"
      />
      <section className="section-container">
        <h1 className="section-title">{id}</h1>
        <Textbox attribute="red" text={sectionText.text1} />
        <Textbox attribute="red bottom" text={sectionText.text2} />
        <Textbox
          attribute="black"
          text="We give you that perfect cup every time."
        />
      </section>
    </section>
  );
}
