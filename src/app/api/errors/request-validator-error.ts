import { CustomError, IRenderError } from "./custom-error";
import { ValidationError } from "express-validator";

export class RequestValidatorError extends CustomError {
  status: number = 400;
  constructor(public errors: ValidationError[]) {
    super("Bad request");
    Object.setPrototypeOf(this, RequestValidatorError.prototype);
  }

  renderError(): IRenderError[] {
    return this.errors.map((error: ValidationError) => ({
      ...error,
      message: this.message,
      field: this.name,
      status: this.status,
    }));
  }
}
