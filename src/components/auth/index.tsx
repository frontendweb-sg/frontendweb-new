"use client";
import Typography from "../ui/Typography";
import Signup from "./Singup";
import LoginForm from "./SignIn";
import Link from "next/link";
import Box from "../ui/Box";
import Alert from "../ui/Alert";
import { useState } from "react";
import { AppContent } from "@/utils/AppContent";
import { useSession } from "next-auth/react";

/**
 * Auth component
 * @returns
 */
const Auth = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [isSignup, setIsSignup] = useState(false);

	const { status } = useSession({
		required: true,
		onUnauthenticated() {},
	});

	const onErrorHandler = (error: string | null) => setError(error);

	const handler = (
		event: React.MouseEvent<HTMLAnchorElement>,
		value: boolean
	) => {
		event.preventDefault();
		setIsSignup(value);
	};

	let title = isSignup ? AppContent.signUp : AppContent.signIn;
	let authElement = isSignup ? (
		<Signup errorHandler={onErrorHandler} setLoading={setLoading} />
	) : (
		<LoginForm errorHandler={onErrorHandler} setLoading={setLoading} />
	);

	return (
		<Box className="auth">
			{error && <Alert color="danger">{error}</Alert>}
			{status === "loading" && loading && (
				<Alert>{AppContent.authenticating}</Alert>
			)}
			<Box className="auth-form-title">
				<Typography variant="h3">{title}</Typography>
				<Typography variant="body2" className="text-sm mt-2 mb-4">
					{isSignup ? (
						<>
							{AppContent.signInText}
							<Link
								href="/#"
								className="text-blue ms-1"
								onClick={(e) => handler(e, false)}>
								{AppContent.signInHere}
							</Link>
						</>
					) : (
						<>
							{AppContent.signupText}
							<Link
								href="/#"
								className="text-blue ms-1"
								onClick={(e) => handler(e, true)}>
								{AppContent.signUpHere}
							</Link>
						</>
					)}
				</Typography>
			</Box>

			{authElement}

			<div className="auth-social">
				<span>Or</span>
			</div>
		</Box>
	);
};

export default Auth;
