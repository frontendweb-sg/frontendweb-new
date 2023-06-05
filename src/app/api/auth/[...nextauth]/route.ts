import { connectDb } from "@/lib/db";
import { User, IUserDoc } from "@/models/user";
import { BadRequestError } from "../../errors/bad-request-error";
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
				await connectDb();

				const user = (await User.findOne({
					email: profile?.email,
				})) as IUserDoc;

				if (!user) {
					const names = profile?.login.split("-");
					const newUser = new User({
						firstname: names[0],
						lastname: names[1] ?? "",
						photo_url: profile?.avatar_url,
					});
					console.log("newUser", newUser);
				}
			}

			return true;
		},
		jwt({ user, token, account, profile, trigger, isNewUser, session }) {
			console.log("a", {
				user,
				token,
				account,
				profile,
				trigger,
				isNewUser,
				session,
			});
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
