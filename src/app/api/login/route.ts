import { connectDb } from "@/lib/db";
import { Jwt } from "@/lib/jwt";
import { Password } from "@/lib/password";
import { IUserDoc, User } from "@/models/user";
import { NextResponse } from "next/server";
import { BadRequestError } from "../errors/bad-request-error";
import { AuthError } from "../errors/auth-error";
import { CustomError } from "../errors/custom-error";

/**
 * Login handler
 * @param req
 * @returns
 */
export async function POST(req: Request) {
	try {
		await connectDb();
		const body = (await req.json()) as { email: string; password: string };

		if (!body.email || !body.password) {
			throw new BadRequestError("Please provide email and password!");
		}

		const user = (await User.findOne({
			$or: [{ email: body.email }, { mobile: body.email }],
		})) as IUserDoc;

		if (!user) {
			throw new BadRequestError("User not existed, Please register!");
		}

		let verify = Password.compare(body.password, user.password);
		if (!verify) {
			throw new AuthError(
				"Password is not matched, please check your password!"
			);
		}

		user.token = Jwt.genToken({
			email: user.email,
			id: user.id,
		});

		return NextResponse.json(user);
	} catch (error) {
		if (error instanceof CustomError)
			return NextResponse.json({
				status: error.status,
				message: error.message,
			});
		else console.log(error);
	}
}
