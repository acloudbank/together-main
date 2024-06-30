import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const UkLanguageSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#uk-lang)">
        <path d="M-4 0H28V24H-4V0Z" fill="#012169" />
        <path
          d="M-0.25 0L11.95 9.05L24.1 0H28V3.1L16 12.05L28 20.95V24H24L12 15.05L0.0500002 24H-4V21L7.95 12.1L-4 3.2V0H-0.25Z"
          fill="white"
        />
        <path
          d="M17.2 14.05L28 22V24L14.45 14.05H17.2ZM8 15.05L8.3 16.8L-1.3 24H-4L8 15.05ZM28 0V0.15L15.55 9.55L15.65 7.35L25.5 0H28ZM-4 0L7.95 8.8H4.95L-4 2.1V0Z"
          fill="#C8102E"
        />
        <path d="M8.05 0V24H16.05V0H8.05ZM-4 8V16H28V8H-4Z" fill="white" />
        <path
          d="M-4 9.65V14.45H28V9.65H-4ZM9.65 0V24H14.45V0H9.65Z"
          fill="#C8102E"
        />
      </g>
      <defs>
        <clipPath id="uk-lang">
          <rect width="24" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const UkLanguageIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={UkLanguageSVG} {...props} />;
};

export default UkLanguageIcon;
