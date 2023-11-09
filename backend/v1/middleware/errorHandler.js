import { Prisma } from "@prisma/client";

const logError = (error, req, res, next) => {
  console.log(
    "***************************************************************************"
  );
  console.error(error);
  console.log(
    "***************************************************************************"
  );
  next(error);
};

const prismaErrors = (error, req, res, next) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (error.code === "P2025") {
      console.log(`Error code: ${error.code}`);
      res.json({
        result: "Failed",
        error: error.meta.cause,
        code: error.code,
      });
    }
  } else {
    res.json({
      result: "Failed",
      error: error.message,
    });
  }
};

export default {
  logError,
  prismaErrors,
};
