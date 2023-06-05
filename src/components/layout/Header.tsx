import { useSession } from "next-auth/react";
import Container from "../ui/Container";
import Logo from "./Logo";
import Nav from "./Nav";

/**
 * Header component
 * @returns
 */
const Header = () => {
	return (
		<header className="navbar navbar-expand-md bg-primary">
			<Container>
				<Logo href="/" color="light" />
				<Nav />
			</Container>
		</header>
	);
};

export default Header;
