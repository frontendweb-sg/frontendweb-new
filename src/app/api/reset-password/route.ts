import { NextRequest, NextResponse } from "next/server";
import { CustomError } from "../errors/custom-error";
import { Jwt } from "@/lib/jwt";
import { IUserDoc, User } from "@/models/user";
import { mailer } from "@/lib/mailer";
import { NotFoundError } from "../errors/not-found-error";
import { BadRequestError } from "../errors/bad-request-error";
import { AppContent } from "@/utils/AppContent";
import { connectDb } from "@/lib/db";
/**
 * Forgot handler
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
	try {
		await connectDb();

		const { email } = await req.json();

		const user = (await User.findOne({ email })) as IUserDoc;

		if (!user) {
			throw new NotFoundError(
				"Your account is not found, please register first"
			);
		}

		if (!user.emailVerified) {
			throw new BadRequestError(
				"Your account is not verified yet, check your mail and click to verfiy button"
			);
		}

		user.resetToken = Jwt.genToken({
			email: user.email,
			id: user.id,
		});

		await user.save();
		const url = `${process.env.NEXTAUTH_URL}/auth/reset-password/${user.resetToken}`;

		mailer.send({
			from: process.env.MAILER_USER!,
			to: email,
			subject: "Forgot password",
			text: "Welcome to the frontendweb",
			html: `
      <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${AppContent.resetPassword}</title>
  <style>
    .table {
      max-width: 500px;
      background-color: #f7f7f7;
      margin: auto;
      text-align: center;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      color: #545454;
      border-radius: 5px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: 500;
      color: #1f1f40;
    }

    h1 {
      font-size: 22px;
    }

    h6 {
      font-size: 14px;
      font-weight: 500;
    }

    p {
      line-height: 1.4;
    }

    a:hover {
      color: #0893d2;
    }

    .logo {
      margin-bottom: 30px;
    }

    .section {
      border-radius: 5px;
      background-color: #fff;
      padding: 25px;
    }

    .title {
      font-weight: 600;
      font-family: "Roboto", sans-serif;
    }

    .btn {
      margin: 40px 0;
      display: inline-block;
      padding: 12px;
      border-radius: 4px;
      min-width: 160px;
      background-color: #1f1f40;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 50px;
    }

    .btn:hover {
      background-color: #e12454;
      color: #fff;
      box-shadow: 0 2px 0px #e12454;
    }

    hr {
      border: 1px solid #eee;
      margin: 25px 0;
    }

    .p-small {
      font-size: 13px;
    }

    .need-help {
      margin: 20px 0;
      background-color: #fff;
      padding: 20px;
    }
  </style>
</head>

<body>
  <table class="table">
    <tbody>
      <tr>
        <td style="padding: 50px 20px">
          <div class="logo">
            <img src="./logo.png" />
          </div>
          <div class="section">
            <h2 class="title">
              ${AppContent.forgotPasswordText}
            </h2>
            <hr />
            <p>${AppContent.notToWorryText}</p>
            <a href="${url}" class="btn">${AppContent.resetPassword}</a>
          </div>
          <div class="section need-help">
            <h6>${AppContent.needMoreHelp}</h6>
            <a style="font-size: 12px; color: #1f1f40" href="mail:frontendweb.sg@gmail.com">Write mail to us</a>
          </div>
          <div class="footer">
            <p class="p-small">
              ${AppContent.resetNotRequestText}
            </p>
            <p class="p-small">
              Copyright &copy; ${new Date().getFullYear},
              <b>frontendweb.in</b>
            </p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
      `,
		});
		return NextResponse.json({
			status: 200,
			message: "Email sent, please check your mail",
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
