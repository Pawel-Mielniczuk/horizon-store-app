import { NavStyles } from "./NavStyles";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <NavStyles>
      <Link to="/products">Products</Link>
      <Link to="/sell">Sell</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/account">Account</Link>
    </NavStyles>
  );
}
