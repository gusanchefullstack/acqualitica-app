import { body, param, validationResult } from "express-validator";

export const inputErrorHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    //400 is Bad Request
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};
