import { GetLetterByIdQuery } from "generated-graphql";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import * as Styled from "./LetterGenerationStep.styled";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { UnknownErrorModal, useRouter } from "common";
import { useLetterGenerationStep } from "./hooks";

type Props = {
  letter?: GetLetterByIdQuery;
  letterContents: string;
  generationLoading: boolean;
  isErrorModalOpen: boolean;
  handleCloseErrorModal: () => void;
  handleOkErrorModal: () => void;
};

export const LetterGenerationStep = ({
  letter,
  letterContents,
  generationLoading,
  isErrorModalOpen,
  handleCloseErrorModal,
  handleOkErrorModal,
}: Props): JSX.Element => {
  const router = useRouter();
  const {
    duplicateByEmail,
    handleDuplicateByEmailValueChange,
    handleSubmit,
    isLoading,
  } = useLetterGenerationStep({
    letter,
  });
  return (
    <>
      {/* Title section */}
      {!generationLoading ? (
        <Styled.EditBox>
          <Styled.EditDescription>
            At this stage, you can edit the content of the letters, so check
            them carefully
          </Styled.EditDescription>
          <Styled.DuplicateCheckbox
            checked={duplicateByEmail}
            onChange={handleDuplicateByEmailValueChange}
          >
            Duplicate letters by email
          </Styled.DuplicateCheckbox>
        </Styled.EditBox>
      ) : (
        <Styled.EmptyBox></Styled.EmptyBox>
      )}

      {/* Slider section */}
      <Styled.SwiperContainer>
        <Styled.Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={16}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 20,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={generationLoading ? false : true}
          modules={[EffectCoverflow, Pagination]}
        >
          {letter?.letters_by_pk?.letterContents?.map((_letterContent) => (
            <Styled.SwiperSlide key={_letterContent.id}>
              <Styled.LetterContainer className="letter-container">
                <Styled.LetterHeader>
                  <Styled.RepresentativeInfo>
                    <Styled.RepresentativeAvatar size={24} />
                    <Styled.RepresentativeName>{`${
                      _letterContent.representative?.firstname
                    } ${
                      _letterContent.representative?.middlename
                        ? `${_letterContent.representative?.middlename.charAt(
                            0
                          )}.`
                        : ""
                    } ${
                      _letterContent.representative?.lastname
                    }`}</Styled.RepresentativeName>
                  </Styled.RepresentativeInfo>

                  {/* Edit and full screen */}
                  {!generationLoading && (
                    <Styled.LetterIcons>
                      <Styled.FullScreenIcon
                        onClick={(_e) => {
                          router.push(
                            `/create-letter/view?id=${letter?.letters_by_pk?.id}&contentId=${_letterContent?.id}`
                          );
                        }}
                      />
                      <Styled.EditIcon
                        onClick={(_e) => {
                          router.push(
                            `/create-letter/edit?id=${letter?.letters_by_pk?.id}&contentId=${_letterContent?.id}`
                          );
                        }}
                      />
                    </Styled.LetterIcons>
                  )}
                </Styled.LetterHeader>

                {/* Letter content */}
                <Styled.LetterPreset className="preset">
                  {!generationLoading && _letterContent.content
                    ? _letterContent.content
                    : letterContents}
                </Styled.LetterPreset>
              </Styled.LetterContainer>
            </Styled.SwiperSlide>
          ))}
        </Styled.Swiper>
      </Styled.SwiperContainer>

      {/* Save button */}
      {!generationLoading && (
        <Styled.SubmitContainer>
          <Styled.Button
            type="primary"
            htmlType="button"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Save & Next
          </Styled.Button>
        </Styled.SubmitContainer>
      )}

      <UnknownErrorModal
        open={isErrorModalOpen}
        handleCancel={handleCloseErrorModal}
        handleOk={handleOkErrorModal}
      />
    </>
  );
};
