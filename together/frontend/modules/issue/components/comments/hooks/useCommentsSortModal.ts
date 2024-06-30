import { Order_By } from "generated-graphql";
import { useCallback, useState } from "react";

type UseCommentsSortModalResult = {
  isCommentsSortModalOpen: boolean;
  openCommentsSortModal: () => void;
  closeCommentsSortModal: () => void;
  sortBy: Order_By;
  sortByNewOneFirst: () => void;
  sortByOldOneFirst: () => void;
};

export function useCommentsSortModal(): UseCommentsSortModalResult {
  const [isCommentsSortModalOpen, setIsCommentsSortModalOpen] =
    useState<boolean>(false);
  const [sortBy, setSortBy] = useState<Order_By>(Order_By.Desc);

  const sortByNewOneFirst = useCallback(() => {
    setSortBy(Order_By.Desc);
  }, [setSortBy]);

  const sortByOldOneFirst = useCallback(() => {
    setSortBy(Order_By.Asc);
  }, [setSortBy]);

  const openCommentsSortModal = useCallback(() => {
    setIsCommentsSortModalOpen(true);
  }, []);

  const closeCommentsSortModal = useCallback(() => {
    setIsCommentsSortModalOpen(false);
  }, []);

  return {
    isCommentsSortModalOpen,
    openCommentsSortModal,
    closeCommentsSortModal,
    sortBy,
    sortByNewOneFirst,
    sortByOldOneFirst,
  };
}
