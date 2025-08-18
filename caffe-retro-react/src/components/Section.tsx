import type { ReactElement } from "react";
import Textbox from "./Textbox";

interface ISectionProps {
  className: string;
  id: string;
  imgSrc: string;
}

export default function Section(props: ISectionProps): ReactElement {
  return (
    <section className={props.className} id={props.id}>
      <img
        src={props.imgSrc}
        alt="${props.id} section background image"
        className="background-image"
      />
      <section className="section-container">
        <h1 className="section-title">{props.id}</h1>
        <Textbox attribute="red"></Textbox>
        <Textbox attribute="bottom"></Textbox>
        <Textbox attribute="black"></Textbox>
      </section>
    </section>
  );
}
