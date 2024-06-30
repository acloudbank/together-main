import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const HistoryFillSVG = () => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0644531 9.96791C0.0644531 15.0112 4.15508 19.1018 9.19838 19.1018C14.2417 19.1018 18.3323 15.0112 18.3323 9.96791C18.3323 4.92461 14.2417 0.833984 9.19838 0.833984C4.15508 0.833984 0.0644531 4.92461 0.0644531 9.96791ZM9.88834 10.7741L13.3897 13.3056C13.4781 13.3669 13.4977 13.4897 13.4339 13.5806L12.7316 14.5382C12.6678 14.6241 12.545 14.6437 12.4566 14.5799L8.39548 11.6187C8.34392 11.5819 8.31445 11.523 8.31445 11.4591V4.69708C8.31445 4.58904 8.40285 4.50065 8.51088 4.50065H9.69191C9.79994 4.50065 9.88834 4.58904 9.88834 4.69708V10.7741Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const HistoryFillIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={HistoryFillSVG} {...props} />;
};

export default HistoryFillIcon;
