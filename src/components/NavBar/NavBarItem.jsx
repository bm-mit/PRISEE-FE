import PropTypes from "prop-types";

NavBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function NavBarItem({ title, link, className }) {
  return (
    <li className="nav-item">
      <a
        className={`${className} nav-link fw-bold text-center my-auto link-underline link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover`}
        href={link}
      >
        {title}
      </a>
    </li>
  );
}
