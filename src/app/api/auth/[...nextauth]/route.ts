import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

/**
 * Handler
 */
const handler = NextAuth({
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
			},
		}),
	],
	callbacks: {
		jwt({ user, token }) {
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
});

export { handler as GET, handler as POST };
