import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const BlackArrowRightSVG = () => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9682 7.45898L8.53516 0.139788C8.47042 0.0839842 8.38784 0.0527344 8.30078 0.0527344L6.32534 0.0527344C6.16016 0.0527344 6.08426 0.258092 6.20926 0.365234L14.0262 7.15095L0.963728 7.15095C0.865513 7.15095 0.785156 7.23131 0.785156 7.32952L0.785156 8.66881C0.785156 8.76702 0.865513 8.84738 0.963728 8.84738L14.024 8.84738L6.20703 15.6331C6.08203 15.7425 6.15792 15.9456 6.3231 15.9456L8.36551 15.9456C8.40792 15.9456 8.45033 15.93 8.48158 15.901L16.9682 8.53934C17.0455 8.47215 17.1074 8.38915 17.1499 8.29597C17.1923 8.20278 17.2143 8.10157 17.2143 7.99916C17.2143 7.89676 17.1923 7.79555 17.1499 7.70236C17.1074 7.60917 17.0455 7.52618 16.9682 7.45898Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const BlackArrowRightIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={BlackArrowRightSVG} {...props} />;
};

export default BlackArrowRightIcon;
