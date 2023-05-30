import { CustomError } from "./custom-error";

/**
 * Auth error
 */
export class AuthError extends CustomError {
  status: number = 401;
  constructor(public message: string = "Unauthrized access") {
    super(message);
    Object.setPrototypeOf(this, AuthError.prototype);
  }
  renderError() {
    return [
      {
        message: this.message,
        status: this.status,
        field: this.name,
      },
    ];
  }
}
