"use client";
import React from "react";
import NavItem from "./NavItem";
import { BsLock } from "react-icons/bs";
import NavbarUser from "../shared/NavbarUser";
import { useSession } from "next-auth/react";

export type NavProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
const Nav = () => {
	const { data: session, status } = useSession();
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
				{status === "authenticated" ? (
					<li>
						<NavbarUser />
					</li>
				) : (
					<NavItem href="/auth" menu>
						<BsLock className="me-1" /> Login
					</NavItem>
				)}
			</ul>
		</div>
	);
};

export default Nav;
