import type { ReactElement } from "react";

export function Header(): ReactElement {
  return (
    <header>
      <nav className="nav">
        <a href="#hot">Hot</a>
        <a href="#juicy">Juicy</a>
        <a href="#cosy">Cosy</a>
      </nav>
    </header>
  );
}
