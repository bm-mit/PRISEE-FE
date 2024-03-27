import PropTypes from "prop-types";
import NavBarItem from "./NavBarItem";

NavBar.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default function NavBar({ bannerImage, navItems }) {
  return (
    <div className="container-lg">
      <div className="navbar navbar-expand-lg bg-tertiary">
        <a className="navbar-brand w-75" href="/">
          <img className="img-fluid" src={bannerImage} alt="banner" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((navItem) => (
              <NavBarItem
                key={navItem.id}
                title={navItem.title}
                link={navItem.link}
              />
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-5 my-0" />
    </div>
  );
}
