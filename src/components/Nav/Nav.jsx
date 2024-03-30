import { NavPropTypes } from "./PropTypes";
import NavItemContainer from "./NavItemContainer";

import "./Nav.css";

Nav.propTypes = NavPropTypes;

export default function Nav({
  id,
  bannerImage,
  navItems,
  containerClassName,
  itemsClassName,
}) {
  return (
    <div className="container-fluid bg-white" id={id}>
      <div className="navbar navbar-expand-lg bg-tertiary">
        {bannerImage !== undefined ? (
          <a className="navbar-brand" href="/">
            <img src={bannerImage} alt="banner" />
          </a>
        ) : null}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}SupportedContent`}
          aria-controls={`${id}SupportedContent`}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavItemContainer
          navItems={navItems}
          className={containerClassName}
          itemsClassName={itemsClassName}
          id={`${id}SupportedContent`}
        />
      </div>
    </div>
  );
}
