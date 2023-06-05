import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
/**
 * Handler
 */
const handler = NextAuth({
	providers: [
		Github({
			clientId: process.env.GITHUB_CLIENTID!,
			clientSecret: process.env.GITHUB_SECRET_KEY!,
		}),
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
		async signIn({ user, account, profile, email, credentials }) {
			if (account?.provider === "github") {
				console.log("profile", profile);
			}
			return true;
		},
		jwt({ user, token, account }) {
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
