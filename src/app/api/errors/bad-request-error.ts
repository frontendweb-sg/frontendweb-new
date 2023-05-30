import { CustomError } from "./custom-error";

/**
 * Not found error
 */
export class BadRequestError extends CustomError {
  status: number = 400;
  constructor(public message: string = "Bad request") {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
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
