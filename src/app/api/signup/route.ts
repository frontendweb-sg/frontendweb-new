import { connectDb } from "@/lib/db";
import { Jwt } from "@/lib/jwt";
import { Password } from "@/lib/password";
import { IUser, IUserDoc, User } from "@/models/user";
import { NextResponse } from "next/server";
import { BadRequestError } from "../errors/bad-request-error";
import { CustomError } from "../errors/custom-error";
import { requestValidator } from "../middleware/request-validator";
import { query } from "express-validator";
/**
 * Signup
 * @param req
 * @returns
 */
export async function POST(req: Request) {
  try {
    await connectDb();
    const body = (await req.json()) as IUser;

    await Promise.all(
      [
        query("firstname").notEmpty().withMessage("First name is required!"),
        query("lastname").notEmpty().withMessage("Last name is required!"),
        query("email").notEmpty().withMessage("Email is required!"),
        query("password").notEmpty().withMessage("Password is required!"),
        query("mobile").notEmpty().withMessage("Mobile is required!"),
      ].map((validation) => validation.run(req))
    );

    await requestValidator(req);

    const hasUser = await User.findOne({ email: body.email });
    if (hasUser) {
      throw new BadRequestError(
        "User already existed, please registered with different email id"
      );
    }

    const newUser = new User(body);
    const result = await newUser.save();
    return NextResponse.json(result);
  } catch (error) {
    console.log("e", error);
    if (error instanceof CustomError)
      return NextResponse.json({
        status: error.status,
        message: error.message,
      });
    else console.log(error);
  }
}
