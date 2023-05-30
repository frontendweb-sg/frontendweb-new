import React from "react";
import NavItem from "./NavItem";
import { BsLock } from "react-icons/bs";
import NavbarUser from "../shared/NavbarUser";

export type NavProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
const Nav = () => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto align-items-center">
        <NavItem href="/courses" menu>
          Courses
        </NavItem>
        <NavItem href="/portfolio" menu>
          Portfolio
        </NavItem>
        <NavItem href="/services" menu>
          Services
        </NavItem>
        <NavItem href="/blogs" menu>
          Blogs
        </NavItem>
        <NavItem href="/auth" menu>
          <BsLock className="me-1" /> Login
        </NavItem>
        <li>
          <NavbarUser />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
