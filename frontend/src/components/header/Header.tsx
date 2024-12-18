import { Link } from "react-router-dom";
import { Nav } from "../nav/Nav";
import { HeaderStyles } from "./HeaderStyles";

export function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Link to="/">HorisonGear</Link>
      </div>
      <div className="sub-bar">
        <input type="text" />
      </div>
      <Nav />
    </HeaderStyles>
  );
}
