"use client";
import Typography from "../ui/Typography";
import Signup from "./Singup";
import LoginForm from "./SignIn";
import Link from "next/link";
import { useState } from "react";
import { AppContent } from "@/utils/AppContent";
import { useSession } from "next-auth/react";
import Box from "../ui/Box";

/**
 * Auth component
 * @returns
 */
const Auth = () => {
	const { data: session, status } = useSession();
	const [isSignup, setIsSignup] = useState(false);

	console.log(status);

	return (
		<Box className="auth">
			{status === "loading" && (
				<Typography>Please wait. authenticating...</Typography>
			)}
			<Box className="auth-form-title">
				<Typography variant="h3">
					{isSignup ? AppContent.signUp : AppContent.signIn}
				</Typography>
				<Typography variant="body2" className="text-sm mt-2 mb-4">
					{isSignup ? (
						<>
							{AppContent.signInText}
							<Link
								href="/#"
								onClick={(e) => {
									e.preventDefault();
									setIsSignup(false);
								}}
								className="text-blue ms-1"
								passHref>
								{AppContent.signInHere}
							</Link>
						</>
					) : (
						<>
							{AppContent.signupText}
							<Link
								className="text-blue ms-1"
								onClick={(e) => {
									e.preventDefault();
									setIsSignup(true);
								}}
								href="/#"
								passHref>
								{AppContent.signUpHere}
							</Link>
						</>
					)}
				</Typography>
			</Box>
			{isSignup ? <Signup /> : <LoginForm />}
			<div className="auth-social">
				<span>Or</span>
			</div>
		</Box>
	);
};

export default Auth;
