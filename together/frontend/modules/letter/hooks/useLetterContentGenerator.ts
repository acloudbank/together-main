import {
  GetLetterByIdDocument,
  GetLetterByIdQuery,
  LetterStatus_Enum,
  useUpdateInitialLetterContentsMutation,
  useUpdateLetterContentByIdMutation,
} from "generated-graphql";
import { useCallback, useMemo, useState } from "react";
import { ChatGPTAPI } from "chatgpt";
import { useApolloMutation } from "common";

type Args = {
  letter?: GetLetterByIdQuery;
  previous?: () => void;
};

type UseLetterContentGeneratorResult = {
  generationLoading: boolean;
  letterContents: string;
  generateLetterContents: (contentId?: string) => Promise<void>;

  regenerationLoading: boolean;
  regeneratedLetterContent: string;
  regenerateLetterContent: (contentId: string) => Promise<void>;

  isErrorModalOpen: boolean;
  handleCloseErrorModal: () => void;
  handleOkErrorModalInLetterGenerationStep: () => void;
};

export function useLetterContentGenerator({
  letter,
  previous,
}: Args): UseLetterContentGeneratorResult {
  const [generationLoading, setGenerationLoading] = useState<boolean>(false);
  const [letterContents, setLetterContents] = useState<string | null>(null);

  const [regeneratedLetterContent, setRegeneratedLetterContent] = useState<
    string | null
  >(null);
  const [regenerationLoading, setRegenerationLoading] =
    useState<boolean>(false);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);

  const handleCloseErrorModal = useCallback(() => {
    setIsErrorModalOpen(false);
  }, []);

  const showErrorModal = useCallback(() => {
    setIsErrorModalOpen(true);
  }, []);

  const handleOkErrorModalInLetterGenerationStep = useCallback(() => {
    setIsErrorModalOpen(false);
    if (previous) previous();
  }, [previous]);

  const prompt = useMemo(() => {
    const theLetter = letter?.letters_by_pk;
    let tempPrompt =
      `Write a letter to one of my government representatives with the name [representative]. ` +
      `The writer full name is ${
        theLetter?.creatorName + " " + theLetter?.creatorSurname
      }. Use it. ` +
      `The letter should be well-written, clear, and concise, and it should address a specific issue that I have. ` +
      `Include specific details and evidence to support my argument`;
    if (
      letter &&
      theLetter &&
      theLetter.status === LetterStatus_Enum.AiParticipationStep
    ) {
      tempPrompt += `and convince the representative to ${theLetter.expectations}`;
      tempPrompt += `. Be respectful and professional in tone`;
      tempPrompt += `, but also reflect that I feel ${theLetter.feelings} about this issue`;
      tempPrompt +=
        `. ` +
        `Consider the representative's political views and priorities when crafting my argument, ` +
        `and try to appeal to their sense of duty and responsibility to their constituents. `;
      if (theLetter.issueId && theLetter.issueId !== "") {
        tempPrompt += `The issue my letter should address: ${theLetter.issue.title} `;
        tempPrompt += `Information about the issue my letter should address: ${theLetter.issue?.content}`;
      } else {
        tempPrompt += `The issue my letter should address: ${theLetter.topic} `;
      }
      if (
        theLetter.additionalInformation &&
        theLetter.additionalInformation !== ""
      ) {
        tempPrompt += `Additional Information about the issue is: ${theLetter.additionalInformation}`;
      }
    }
    return tempPrompt;
  }, [letter]);

  const [
    _updateLetterContentById,
    _updatedContent,
    { isLoading: _contentUpdateLoading },
  ] = useApolloMutation(useUpdateLetterContentByIdMutation);

  const [
    updateLetterContents,
    _insertedContent,
    { isLoading: _contentsInsertLoading },
  ] = useApolloMutation(useUpdateInitialLetterContentsMutation);

  const updateLetterContentById = useCallback(
    (contentId: string, content: string) => {
      _updateLetterContentById({
        variables: {
          contentId,
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
    },
    [_updateLetterContentById, letter]
  );

  const saveInitialLetterContents = useCallback(
    (content: string) => {
      updateLetterContents({
        variables: {
          letterId: letter.letters_by_pk.id,
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
    },
    [letter?.letters_by_pk?.id, updateLetterContents]
  );

  const generateLetterContents = useCallback(async () => {
    const openai = new ChatGPTAPI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY_PEERPLAYS,
      completionParams: {
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        top_p: 1,
        presence_penalty: 1,
      },
      systemMessage: `You are a professional political writer that will help me write a letter to one of my government representatives.`,
    });
    try {
      setLetterContents(null);
      setGenerationLoading(true);
      const res = await openai.sendMessage(`${prompt}`, {
        onProgress: (partialResponse) => {
          setLetterContents(partialResponse.text);
        },
      });
      saveInitialLetterContents(res.text);
      setGenerationLoading(false);
    } catch (err) {
      setGenerationLoading(false);
      showErrorModal();
      console.log(err);
    }
  }, [prompt, saveInitialLetterContents, showErrorModal]);

  const regenerateLetterContent = useCallback(
    async (contentId: string) => {
      const openai = new ChatGPTAPI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY_PEERPLAYS,
        completionParams: {
          model: "gpt-3.5-turbo",
          temperature: 0.8,
          top_p: 1,
          presence_penalty: 1,
        },
        systemMessage: `You are a professional political writer that will help me write a letter to one of my government representatives.`,
      });
      try {
        setRegeneratedLetterContent(null);
        setRegenerationLoading(true);
        const res = await openai.sendMessage(`${prompt}`, {
          onProgress: (partialResponse) => {
            setRegeneratedLetterContent(partialResponse.text);
          },
        });

        const representative = letter?.letters_by_pk?.letterContents?.find(
          (letterContent) => letterContent.id === contentId
        )?.representative;

        updateLetterContentById(contentId, res.text);
        setRegenerationLoading(false);
      } catch (err) {
        setRegenerationLoading(false);
        showErrorModal();
        console.log(err);
      }
    },
    [prompt, updateLetterContentById, showErrorModal, letter]
  );

  return {
    letterContents,
    generationLoading,
    generateLetterContents,

    regenerationLoading,
    regeneratedLetterContent,
    regenerateLetterContent,

    isErrorModalOpen,
    handleCloseErrorModal,
    handleOkErrorModalInLetterGenerationStep,
  };
}
