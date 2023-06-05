import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";
import { ReactNode } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</>
	);
};
export default Layout;
