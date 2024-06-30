import { FormInstance } from "ui";
export type RegistrationFormInstance = FormInstance<RegistrationFormValues>;

export type RegistrationFormValues = {
  username: string;
  email: string;
  password: string;
};

export type ZipCodeFormValues = {
  zipCode: string;
};

export type ZipCodeFormInstance = FormInstance<ZipCodeFormValues>;
