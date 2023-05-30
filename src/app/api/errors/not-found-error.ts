import { CustomError } from "./custom-error";

/**
 * Not found error
 */
export class NotFoundError extends CustomError {
  status: number = 404;
  constructor(public message: string = "Not found") {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
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
