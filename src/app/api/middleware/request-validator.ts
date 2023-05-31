import { validationResult } from "express-validator";
import { RequestValidatorError } from "../errors/request-validator-error";

export const requestValidator = (req: Request) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    throw new RequestValidatorError(result.array());
  }
};
