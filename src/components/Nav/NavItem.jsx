import { NavItemPropTypes } from "./PropTypes";

NavItem.propTypes = NavItemPropTypes;

export default function NavItem({ title, link, className }) {
  return (
    <li className="nav-item">
      <a
        className={`${className} nav-link fw-bold text-center my-auto link-offset-2`}
        href={link}
      >
        {title}
      </a>
    </li>
  );
}
