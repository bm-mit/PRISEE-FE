import PropTypes from "prop-types";

NavBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default function NavBarItem({ title, link }) {
  return (
    <li className="nav-item">
      <a className="nav-link fs-5 fw-bold text-center my-auto" href={link}>
        {title}
      </a>
    </li>
  );
}
