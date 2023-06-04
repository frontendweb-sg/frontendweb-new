import { NextRequest, NextResponse } from "next/server";
import { CustomError } from "../../errors/custom-error";
import { BadRequestError } from "../../errors/bad-request-error";
import { IUserDoc, User } from "@/models/user";
import { Jwt } from "@/lib/jwt";
import { Password } from "@/lib/password";

/**
 * Change password handler
 * @param req
 */
export async function PUT(
	req: NextRequest,
	{ params }: { params: { token: string } }
) {
	try {
		const { password } = await req.json();
		const { token } = params;

		const verify = Jwt.verifyToken(token) as any;

		if (!verify) throw new BadRequestError("Invalid token");

		console.log("ve", verify);
		const user = (await User.findOneAndUpdate(
			{
				email: verify.email,
				emailVerificationToken: token,
			},
			{
				$set: { password: Password.hash(password), emailVerificationToken: "" },
			}
		)) as IUserDoc;

		console.log("user", user);
		return NextResponse.json({
			status: 200,
			message: "Password changed successfull",
			user,
		});
	} catch (error) {
		if (error instanceof CustomError)
			return NextResponse.json({
				status: error.status,
				message: error.message,
			});
		else console.log(error);
	}
}
