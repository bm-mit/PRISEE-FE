import PropTypes from "prop-types";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";

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
    <div className="container-fluid bg-white">
      <div className="navbar navbar-expand-lg bg-tertiary">
        <a className="navbar-brand" href="/">
          <img src={bannerImage} alt="banner" />
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
          <ul className="navbar-nav ms-auto mt-1 border-top border-5 border-dark">
            {navItems.map((navItem, index) => (
              <NavBarItem
                key={navItem.id}
                title={navItem.title}
                link={navItem.link}
                className={index === 0 ? "text-primary" : ""}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
