import { Jwt } from "@/lib/jwt";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { token: string } }
) {
  const url = req.nextUrl.clone();
  url.pathname = "/auth";
  const verify = Jwt.verifyToken(params.token) as any;

  const date = new Date(verify.exp * 1000);
  if (!verify) return NextResponse.redirect(url);

  const user = await User.findOne({ email: verify.email });
  if (user && date > new Date()) {
    await User.findByIdAndUpdate(
      user._id,
      {
        $set: { emailVerified: true, emailVerificationToken: "" },
      },
      { new: true }
    );

    setTimeout(() => {
      NextResponse.redirect(url);
    }, 3000);

    return NextResponse.json({ message: "Email verified, please login" });
  }

  return NextResponse.json({
    error: "Token expired, please try again",
  });
}
