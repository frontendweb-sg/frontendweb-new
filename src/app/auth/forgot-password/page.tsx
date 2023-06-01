import ForgotPassword from "@/components/auth/ForgotPassword";
import Box from "@/components/ui/Box";
import Typography from "@/components/ui/Typography";

const Page = () => {
	return (
		<Box className="auth">
			<Typography className="mb-4" variant="h3">
				Forgot password
			</Typography>
			<Typography variant="subtitle2">Enter email address</Typography>
			<ForgotPassword />
		</Box>
	);
};

export default Page;
