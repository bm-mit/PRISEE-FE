import { NavItemContainerPropTypes } from "./PropTypes";

import NavItem from "./NavItem";

NavItemContainer.propTypes = NavItemContainerPropTypes;

export default function NavItemContainer({
  id,
  className,
  navItems,
  itemsClassName,
}) {
  return (
    <div className="collapse navbar-collapse" id={id}>
      <ul
        className={`${className} navbar-nav ms-auto mt-1 border-top border-5 border-dark`}
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
