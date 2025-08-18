import type { ReactElement } from "react";

interface ITextboxProps {
  attribute: string;
  text: string;
}

export default function Textbox(props: ITextboxProps): ReactElement {
  return (
    <article className={`${props.attribute} text-box`}>
      <p>{props.text}</p>
    </article>
  );
}
