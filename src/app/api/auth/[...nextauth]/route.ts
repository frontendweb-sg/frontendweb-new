import axios, { AxiosError } from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

/**
 * Handler
 */
export const authOptions = NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { type: "email", label: "Email", placeholder: "Email address" },
				password: {
					type: "password",
					label: "Password",
					placeholder: "Password",
				},
			},
			async authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				try {
					const response = await axios.post(
						`${process.env.NEXTAUTH_URL}/api/login`,
						{
							email,
							password,
						}
					);
					if (response.status === 200) {
						return response.data;
					}
					return null;
				} catch (error) {
					if (error instanceof AxiosError) throw error.response?.data;
					else throw error;
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		signIn({ credentials, user, email, account, profile }) {
			console.log("user", { credentials, user, email, account, profile });
			return true;
		},
		jwt({ user, token }) {
			// token.name = user.firstname + " " + user.lastname;
			// token.picture = user.photo_url;
			return { ...user, ...token };
		},
		session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
	pages: {
		signIn: "/auth",
	},
	theme: {
		colorScheme: "dark",
	},
	debug: process.env.NODE_ENV === "development",
	logger: {
		error(code, metadata) {
			console.error(code, metadata);
		},
		warn(code) {
			console.warn(code);
		},
		debug(code, metadata) {
			console.debug(code, metadata);
		},
	},
});

export { authOptions as GET, authOptions as POST };
