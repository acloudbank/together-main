import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from "@zxcvbn-ts/core";

import { loadOptions } from ".";

loadOptions().then((options) => {
  zxcvbnOptions.setOptions(options);
});

type TestPasswordResult = {
  score: number;
  feedback: {
    warning: string;
    suggestions: string[];
  };
};

export const testPassword = (password: string): TestPasswordResult => {
  const { score, feedback } = zxcvbn(password) as ZxcvbnResult;

  return {
    score,
    feedback,
  };
};
