import type { ReactElement } from "react";

interface ITextboxProps {
  attribute: string;
}

export default function Textbox(props: ITextboxProps): ReactElement {
  return <article className={`${props.attribute} text-box`}></article>;
}
