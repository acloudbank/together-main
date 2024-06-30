export type UseConfirmationEmailResult = {
  confirmationEmail: string | null;
  setConfirmationEmail: (email: string) => void;
  removeConfirmationEmail: () => void;
};
export function useConfirmationEmail(): UseConfirmationEmailResult {
  const confirmationEmail = localStorage.getItem("confirmationEmail");
  const setConfirmationEmail = (email: string) => {
    localStorage.setItem("confirmationEmail", email);
  };
  const removeConfirmationEmail = () => {
    localStorage.removeItem("confirmationEmail");
  };
  return { confirmationEmail, setConfirmationEmail, removeConfirmationEmail };
}
