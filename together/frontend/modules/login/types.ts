import { FormInstance } from "ui";

export type LoginFormInstance = FormInstance<LoginFormValues>;

export type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};
