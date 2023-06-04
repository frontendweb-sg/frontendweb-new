import NextAuth, { DefaultSession } from "next-auth";

interface IUser {
	firstname: string;
	lastname: string;
	email: string;
	mobile: string;
	photo_url: string;
	firebase_uid: string;
	role: string;
	active: boolean;
	token?: string;
	emailVerified?: boolean;
}

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: IUser;
	}

	interface User extends IUser {}
}
