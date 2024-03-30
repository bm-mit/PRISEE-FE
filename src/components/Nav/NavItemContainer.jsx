import { NavItemContainerPropTypes } from "./PropTypes";

import NavItem from "./NavItem";

NavItemContainer.propTypes = NavItemContainerPropTypes;

export default function NavItemContainer({
  id,
  className,
  isExpand,
  navItems,
  itemsClassName,
}) {
  return (
    <div
      className={`collapse navbar-collapse ${isExpand ? "" : "justify-content-end"}`}
      id={id}
    >
      <ul
        className={`${className} navbar-nav ${isExpand ? "flex-grow-1" : ""}`}
      >
        {navItems.map((navItem) => (
          <NavItem
            key={navItem.id}
            title={navItem.title}
            link={navItem.link}
            className={`${navItem.className} ${itemsClassName}`}
          />
        ))}
      </ul>
    </div>
  );
}
