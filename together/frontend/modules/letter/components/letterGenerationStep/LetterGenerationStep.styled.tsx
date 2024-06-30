import {
  styled,
  Body2Regular,
  UiKitCheckbox,
  Avatar,
  Button as UiButton,
  Pre,
} from "ui";
import { Swiper as UiSwiper, SwiperSlide as UiSwiperSlide } from "swiper/react";
import { colors } from "ui/colors";
import {
  FullScreenIcon as UiFullScreenIcon,
  EditIcon as UiEditIcon,
} from "ui/icons";
import { customVariables } from "ui/customVariables";

export const EditBox = styled.div`
  margin-bottom: 16px;
`;
export const EditDescription = styled(Body2Regular)`
  margin-bottom: 16px;
`;
export const DuplicateCheckbox = styled(UiKitCheckbox)``;

export const EmptyBox = styled.div`
  height: 76px;
  width: 100%;
  margin-bottom: 32px;
`;

export const SwiperContainer = styled.div``;

export const Swiper = styled(UiSwiper)`
  .swiper-wrapper {
    max-height: 450px;
  }
  .swiper-pagination-bullet-active {
    background: ${colors.textColor};
  }
`;

export const SwiperSlide = styled(UiSwiperSlide)`
  &.swiper-slide {
    width: 300px;
    min-height: 444px;
    .swiper-slide-shadow-right {
      background-image: none !important;
    }
    .swiper-slide-shadow-left {
      background-image: none !important;
    }
  }
  &.swiper-slide-active {
    .letter-container {
      height: 418px;
      transition: height 0.1s;
      .preset {
        font-size: 8px;
      }
    }
  }
  &.swiper-slide-next {
    display: flex;
    align-items: center;
    .letter-container {
      height: 350px;
      .preset {
        font-size: 6px;
      }
    }
  }
  &.swiper-slide-prev {
    display: flex;
    align-items: center;
    .letter-container {
      height: 350px;
      .preset {
        font-size: 6px;
      }
    }
  }
`;

export const LetterContainer = styled.div`
  padding: 16px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 4px 20px 30px 0px #656d8b4d;
  margin-bottom: 32px;
`;
export const LetterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid ${colors.borderColor};
  margin-bottom: 12px;
`;
export const RepresentativeInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const RepresentativeAvatar = styled(Avatar)`
  margin-right: 12px;
`;
export const RepresentativeName = styled(Body2Regular)``;
export const LetterIcons = styled.div`
  display: flex;
  align-items: center;
`;
export const FullScreenIcon = styled(UiFullScreenIcon)`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;
export const EditIcon = styled(UiEditIcon)`
  width: 16px;
  height: 16px;
`;

export const LetterPreset = styled(Pre)`
  height: 85%;
  max-height: 85%;
  overflow: hidden;
`;

export const Button = styled(UiButton)`
  width: 100%;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;
