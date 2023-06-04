import Image from "next/image";
import Box from "./ui/Box";
import Col from "./ui/Col";
import Container from "./ui/Container";
import Row from "./ui/Row";
import Typography from "./ui/Typography";

/**
 * Hero component
 * @returns
 */
const Hero = () => {
	return (
		<Box className="hero">
			<Container>
				<Row>
					<Col>
						<Typography variant="h4">The Leader in Online Learning</Typography>
						<Typography variant="h1">
							We are here to help you to upgrade your skills.
						</Typography>
					</Col>
					<Col>
						<Image src="/home-1.png" width={500} height={500} alt="hero" />
					</Col>
				</Row>
			</Container>
		</Box>
	);
};

export default Hero;
