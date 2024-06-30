import { useCallback, useState } from "react";

type UseMeatBallsMenuResult = {
  isMeatBallsMenuOpen: boolean;
  openMeatBallsMenu: (issueId: string) => void;
  closeMeatBallsMenu: () => void;
  selectedIssueId: string;
};

export function useMeatBallsMenu(): UseMeatBallsMenuResult {
  const [isMeatBallsMenuOpen, setIsMeatBallsMenuOpen] =
    useState<boolean>(false);
  const [selectedIssueId, setSelectedIssueId] = useState<string>("");

  const openMeatBallsMenu = useCallback((issueId: string) => {
    setIsMeatBallsMenuOpen(true);
    setSelectedIssueId(issueId);
  }, []);

  const closeMeatBallsMenu = useCallback(() => {
    setIsMeatBallsMenuOpen(false);
    setSelectedIssueId(undefined);
  }, []);

  return {
    isMeatBallsMenuOpen,
    openMeatBallsMenu,
    closeMeatBallsMenu,
    selectedIssueId,
  };
}
