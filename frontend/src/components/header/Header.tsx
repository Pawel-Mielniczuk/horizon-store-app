import { Link } from "react-router-dom";
import { Nav } from "../nav/Nav";
import { HeaderStyles } from "./HeaderStyles";
import { Logo } from "./Logo";

export function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link to="/">HorisonGear</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <input type="text" />
      </div>
      <Nav />
    </HeaderStyles>
  );
}
