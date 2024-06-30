import { capitalize } from "lodash";

export const getReadableErrorMessage = (message: string): string => {
  return capitalize(message.replaceAll("_", " "));
};
