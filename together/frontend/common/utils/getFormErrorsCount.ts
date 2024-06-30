import { FormInstance } from "ui";

export function getFormErrorsCount<FormValues>(form: FormInstance<FormValues>) {
  const errors = form
    .getFieldsError()
    .map((field) => field.errors)
    .reduce((_accumulator, currentValue) => {
      const accumulator = [..._accumulator, ...currentValue];
      return accumulator;
    }, []);

  return errors.length;
}
