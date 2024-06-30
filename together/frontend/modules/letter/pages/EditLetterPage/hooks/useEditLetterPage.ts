import {
  GetLetterByIdDocument,
  GetLetterByIdQuery,
  LetterContents,
  useUpdateLetterContentByIdMutation,
} from "generated-graphql";
import Filter from "bad-words-plus";
import {
  ChangeEvent,
  JSXElementConstructor,
  MutableRefObject,
  ReactElement,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TextAreaRef } from "antd/es/input/TextArea";
import { notification } from "ui";
import { colors } from "ui/colors";
import { useApolloMutation, useRouter } from "common";

type Args = {
  letter?: GetLetterByIdQuery;
  savedLetterContent?: LetterContents;
};
type UseEditLetterPageResult = {
  content: string;
  textareaRef: MutableRefObject<TextAreaRef>;
  height: number;
  handleLetterChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  divRef: MutableRefObject<HTMLDivElement>;
  loading: boolean;
  hasBadWord: boolean;
  contextHolder: ReactElement<any, string | JSXElementConstructor<any>>;
  handleCancelEditLetter: () => void;
  isBadWordModalOpen: boolean;
  handleCancelBadWordModal: () => void;
  handleSave: () => Promise<void>;
  isUpdateLoading: boolean;
};

export function useEditLetterPage({
  letter,
  savedLetterContent,
}: Args): UseEditLetterPageResult {
  const [isBadWordModalOpen, setIsBadWordModalOpen] = useState<boolean>(false);
  const [prevLetterContent, setPrevLetterContent] = useState<LetterContents>();
  const [content, setContent] = useState<string>();
  const textareaRef = useRef<TextAreaRef>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasBadWord, setHasBadWord] = useState<boolean>(false);
  const filter = useMemo(() => {
    return new Filter();
  }, []);
  const router = useRouter();

  const [api, contextHolder] = notification.useNotification({ maxCount: 1 });

  if (savedLetterContent && prevLetterContent !== savedLetterContent) {
    setPrevLetterContent(savedLetterContent);
    setContent(savedLetterContent?.content);
    divRef.current.innerHTML = savedLetterContent?.content;
    setLoading(false);
  }

  const [
    updateLetterContentById,
    _updatedContent,
    { isLoading: isUpdateLoading },
  ] = useApolloMutation(useUpdateLetterContentByIdMutation);

  const openNotification = useCallback(() => {
    api["error"]({
      message: "Unacceptable content!",
      description:
        "Your speech includes hateful, discriminatory or otherwise words.",
      placement: "bottomLeft",
      style: {
        background: colors.errorNotifBackgroundColor,
        padding: "8px 16px",
        border: `1px solid ${colors.errorColor}`,
      },
    });
  }, [api]);

  const handleLetterChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      const badWords = filter.list;
      if (!filter.isProfane(value)) {
        setContent(value);
        divRef.current.innerHTML = value;
        setHasBadWord(false);
      } else {
        let newValue = value;
        for (const badWord of badWords) {
          const escapedBadWord = badWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const regex = new RegExp(`\\b${escapedBadWord}\\b(?!<\/span>)`, "gi");
          const matches = newValue.match(regex);

          if (matches) {
            for (const match of matches) {
              const spanReplacement = `<span id="red-underline">${match}</span>`;
              newValue = newValue.replaceAll(match, spanReplacement);
            }
          }
        }
        if (!hasBadWord) {
          openNotification();
        }
        setHasBadWord(true);
        setContent(value);
        divRef.current.innerHTML = newValue;
      }
    },
    [filter, divRef, setContent, openNotification, hasBadWord]
  );

  const handleCancelEditLetter = useCallback(() => {
    router.push(`/create-letter?id=${letter?.letters_by_pk?.id}`);
  }, [router, letter]);

  const handleCancelBadWordModal = useCallback(() => {
    setIsBadWordModalOpen(false);
  }, []);

  const handleSave = useCallback(async () => {
    if (hasBadWord) {
      setIsBadWordModalOpen(true);
    } else {
      const [_result, { errors }] = await updateLetterContentById({
        variables: {
          contentId: savedLetterContent?.id,
          content,
        },
        refetchQueries: [
          {
            query: GetLetterByIdDocument,
            variables: {
              letterId: letter?.letters_by_pk?.id,
            },
          },
        ],
      });
      if (!errors) {
        router.push(`/create-letter?id=${letter?.letters_by_pk?.id}`);
      }
    }
  }, [
    hasBadWord,
    updateLetterContentById,
    content,
    letter,
    router,
    savedLetterContent,
  ]);

  useLayoutEffect(() => {
    setHeight(divRef.current.clientHeight);
  }, [content, divRef, setHeight]);

  return {
    content,
    textareaRef,
    height,
    handleLetterChange,
    divRef,
    loading,
    hasBadWord,
    contextHolder,
    handleCancelEditLetter,
    isBadWordModalOpen,
    handleCancelBadWordModal,
    handleSave,
    isUpdateLoading,
  };
}
