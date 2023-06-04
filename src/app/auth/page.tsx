import Auth from "@/components/auth";
import Logo from "@/components/layout/Logo";
import Col from "@/components/ui/Col";
import Container from "@/components/ui/Container";
import Row from "@/components/ui/Row";
import Typography from "@/components/ui/Typography";

const Page = () => {
	return (
		<Row cover>
			<Col className="bg-primary text-light align-items-center justify-content-center d-flex">
				<div className="w-50">
					<Logo className="mb-5" href="/" color="light" />
					<Typography>Welcome to sign in</Typography>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit eius
					sint, voluptatem nesciunt, laborum placeat sunt culpa magni expedita
					facilis aut iste amet, reprehenderit consequatur voluptate ullam
					veniam ipsam quae!
					<Typography variant="h5" className="mt-4">
						Learn frontend technologies by expert
					</Typography>
				</div>
			</Col>
			<Col className="justify-content-center align-items-center d-flex relative">
				<Auth />
			</Col>
		</Row>
	);
};

export default Page;
