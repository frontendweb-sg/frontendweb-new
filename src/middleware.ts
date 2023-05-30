import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { query, validationResult } from "express-validator";
import { requestValidator } from "./app/api/middleware/request-validator";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // if (url.pathname.startsWith("/api/signup")) {
  //   await Promise.all(
  //     [
  //       query("firstname").notEmpty().withMessage("First name is required!"),
  //       query("lastname").notEmpty().withMessage("Last name is required!"),
  //       query("email").notEmpty().withMessage("Email is required!"),
  //       query("password").notEmpty().withMessage("Password is required!"),
  //       query("mobile").notEmpty().withMessage("Mobile is required!"),
  //     ].map((validation) => validation.run(req))
  //   );
  // }
}
