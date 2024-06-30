import { AppError, JSON_ENCODED_ERROR_MESSAGE_PREFIX } from "errors";
import { NextApiResponse } from "next";

export const handleApiError = (
  error: Error,
  response: NextApiResponse
): void => {
  if (error instanceof AppError) {
    const errorPayload = {
      extensions: {
        code: error.code,
        messageCode: error.messageCode,
        messageParams: error.messageParams,
        ref: error.ref,
        status: error.status,
      },
    };

    console.log("AppError", errorPayload);

    response.status(error.status).json({
      code: error.code,
      message: JSON_ENCODED_ERROR_MESSAGE_PREFIX + JSON.stringify(errorPayload),
    });
  } else {
    console.log("Unexpected Error", error);
    response
      .status(500)
      .json({ message: error.message, code: "INTERNAL_SERVER_ERROR" });
  }
};
