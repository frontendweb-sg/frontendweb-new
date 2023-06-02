import ChangePassword from "@/components/auth/ChangePassword";
import Logo from "@/components/layout/Logo";
import Box from "@/components/ui/Box";
import Col from "@/components/ui/Col";
import Row from "@/components/ui/Row";
import Typography from "@/components/ui/Typography";
import { AppContent } from "@/utils/AppContent";
import Image from "next/image";

/**
 * Reset password
 * @returns
 */
const Page = ({ params }: { params: { token: string } }) => {
	return (
		<Row cover>
			<Col className="justify-content-center align-items-center d-flex relative">
				<Box>
					<Logo href="/" />
					<Image
						src="/reset-password.jpg"
						alt="auth"
						width={500}
						height={500}
					/>
				</Box>
			</Col>
			<Col className="justify-content-center align-items-center d-flex relative">
				<Box className="auth">
					<Typography variant="h3">{AppContent.resetPassword}</Typography>
					<Typography variant="body2">
						Enter your new password for your account
					</Typography>
					<ChangePassword token={params.token} />
				</Box>
			</Col>
		</Row>
	);
};

export default Page;
