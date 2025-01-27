import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const FrenchLanguageSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#french-1)">
        <path d="M0 3H24V21H0V3Z" fill="#012169" />
        <path
          d="M2.8125 3L11.9625 9.7875L21.075 3H24V5.325L15 12.0375L24 18.7125V21H21L12 14.2875L3.0375 21H0V18.75L8.9625 12.075L0 5.4V3H2.8125Z"
          fill="white"
        />
        <path
          d="M15.9 13.5375L24 19.5V21L13.8375 13.5375H15.9ZM9 14.2875L9.225 15.6L2.025 21H0L9 14.2875ZM24 3V3.1125L14.6625 10.1625L14.7375 8.5125L22.125 3H24ZM0 3L8.9625 9.6H6.7125L0 4.575V3Z"
          fill="#C8102E"
        />
        <path d="M9.0375 3V21H15.0375V3H9.0375ZM0 9V15H24V9H0Z" fill="white" />
        <path
          d="M0 10.2375V13.8375H24V10.2375H0ZM10.2375 3V21H13.8375V3H10.2375Z"
          fill="#C8102E"
        />
        <g clipPath="url(#french-2)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H24V24H0V0Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H7.99875V24H0V0Z"
            fill="#002654"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 0H23.9987V24H16V0Z"
            fill="#CE1126"
          />
        </g>
      </g>
      <defs>
        <clipPath id="french-1">
          <rect width="24" height="24" rx="12" fill="white" />
        </clipPath>
        <clipPath id="french-2">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const FrenchLanguageIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={FrenchLanguageSVG} {...props} />;
};

export default FrenchLanguageIcon;
