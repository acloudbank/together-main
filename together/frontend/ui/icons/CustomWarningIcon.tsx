import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const CustomWarningSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#custom-warning)">
        <path
          d="M10.715 17.5714C10.715 17.9124 10.8504 18.2394 11.0915 18.4806C11.3327 18.7217 11.6597 18.8571 12.0007 18.8571C12.3417 18.8571 12.6687 18.7217 12.9098 18.4806C13.1509 18.2394 13.2864 17.9124 13.2864 17.5714C13.2864 17.2304 13.1509 16.9034 12.9098 16.6623C12.6687 16.4212 12.3417 16.2857 12.0007 16.2857C11.6597 16.2857 11.3327 16.4212 11.0915 16.6623C10.8504 16.9034 10.715 17.2304 10.715 17.5714ZM11.1435 9.42857V14.3571C11.1435 14.475 11.24 14.5714 11.3578 14.5714H12.6435C12.7614 14.5714 12.8578 14.475 12.8578 14.3571V9.42857C12.8578 9.31071 12.7614 9.21429 12.6435 9.21429H11.3578C11.24 9.21429 11.1435 9.31071 11.1435 9.42857ZM23.8855 21.2143L12.7426 1.92857C12.5766 1.64196 12.29 1.5 12.0007 1.5C11.7114 1.5 11.4221 1.64196 11.2587 1.92857L0.115857 21.2143C-0.213607 21.7875 0.198893 22.5 0.857822 22.5H23.1435C23.8025 22.5 24.215 21.7875 23.8855 21.2143ZM2.89889 20.467L12.0007 4.71161L21.1025 20.467H2.89889Z"
          fill="#475D67"
        />
      </g>
      <defs>
        <clipPath id="custom-warning">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CustomWarningIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={CustomWarningSVG} {...props} />;
};

export default CustomWarningIcon;
