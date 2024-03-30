import { NavItemPropTypes } from "./PropTypes";

NavItem.propTypes = NavItemPropTypes;

export default function NavItem({ title, link, className }) {
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
