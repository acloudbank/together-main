export type ResetPasswordFormValues = {
  newPassword: string;
};

export interface ResetPasswordError {
  code?: string;
  message?: string;
  messageCode?: string;
  ref?: string;
}
