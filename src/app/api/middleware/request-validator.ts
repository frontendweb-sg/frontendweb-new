import { validationResult } from "express-validator";
import { RequestValidatorError } from "../errors/request-validator-error";
import { NextResponse } from "next/server";

export const requestValidator = async (req: Request) => {
  const result = await validationResult(req);

  if (!result.isEmpty()) {
    throw new RequestValidatorError(result.array());
  }
};
