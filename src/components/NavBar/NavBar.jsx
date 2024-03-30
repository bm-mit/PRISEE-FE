import Nav from "../Nav/Nav";
import { NavPropTypes } from "../Nav/PropTypes";

NavBar.propTypes = NavPropTypes;

export default function NavBar({ id, bannerImage, navItems }) {
  return <Nav bannerImage={bannerImage} navItems={navItems} id={id} />;
}
