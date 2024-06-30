import { useCallback, useState } from "react";

type UseActionResult = {
  onActionClick: () => void;
  isOpen: boolean;
  closeBottomSheet: () => void;
};
export function useAction(): UseActionResult {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onActionClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const closeBottomSheet = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return {
    onActionClick,
    isOpen,
    closeBottomSheet,
  };
}
