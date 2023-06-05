"use client";
import Avatar from "../ui/Avatar";
import Dropdown, { DropdownItem } from "../ui/Dropdown";
import Typography from "../ui/Typography";
import { useSession } from "next-auth/react";
import upperFirst from "lodash/upperFirst";
import CircleLoader from "../ui/CircleLoader";
const NavbarUser = () => {
	const { data: session, status } = useSession();

	const fullname = session?.user
		? upperFirst(session?.user.firstname.substring(0, 1)) +
		  " " +
		  session?.user.lastname.substring(0, 1)
		: "";
	const element = (
		<div className="d-flex position-relative align-items-center text-white">
			{status === "loading" ? (
				<CircleLoader size="xs">
					<Avatar border size="xs" alt="user" src="/avatar.png" />
				</CircleLoader>
			) : (
				<Avatar border size="xs" alt="user" src="/avatar.png" />
			)}
			<Typography className="mb-0 ms-2 text-white" variant="subtitle2">
				{status === "loading" ? "" : fullname}
			</Typography>
		</div>
	);

	return (
		<div className="navbar-user">
			<Dropdown renderProps={element}>
				<DropdownItem>Hello</DropdownItem>
				<DropdownItem>Hello</DropdownItem>
			</Dropdown>
		</div>
	);
};

export default NavbarUser;
