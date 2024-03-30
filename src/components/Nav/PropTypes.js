import PropTypes from "prop-types";

export const NavItemPropTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const NavItemContainerPropTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  isExpand: PropTypes.bool,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      ...NavItemPropTypes,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  itemsClassName: PropTypes.string,
};

export const NavPropTypes = {
  id: PropTypes.string.isRequired,
  bannerImage: PropTypes.string,
  className: PropTypes.string,
  collapseSize: PropTypes.string.isRequired,
  navItems: NavItemContainerPropTypes.navItems,
  containerClassName: NavItemContainerPropTypes.className,
  itemsClassName: NavItemContainerPropTypes.itemsClassName,
};
