import Nav from "../Nav/Nav";
import { NavPropTypes } from "../Nav/PropTypes";

NavBar.propTypes = NavPropTypes;

export default function NavBar({ id, bannerImage, navItems, collapseSize }) {
  return (
    <Nav
      bannerImage={bannerImage}
      navItems={navItems}
      id={id}
      isExpand={false}
      collapseSize={collapseSize}
      className="bg-white"
      itemsClassName="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
      containerClassName="mt-1 border-top border-5 border-dark"
    />
  );
}
