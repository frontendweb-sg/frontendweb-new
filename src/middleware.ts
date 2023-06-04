import { withAuth } from "next-auth/middleware";

export default withAuth(
	function middleware(req) {
		const nextUrl = req.nextUrl.clone();

		console.log(req.nextauth);
		// if (
		// 	nextUrl.pathname.startsWith("/admin") &&
		// 	req.nextauth.role !== "admin"
		// ) {
		// 	console.log("redirecting to admin");
		// }
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	}
);

export const config = { matcher: ["/user/:path*", "/admin/:path*"] };
