import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const ActionSVG = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="25" fill="url(#Action-pattern)" />
      <path
        d="M25.669 17.4648H24.3297C24.2106 17.4648 24.1511 17.5244 24.1511 17.6434V24.6523H17.4999C17.3808 24.6523 17.3213 24.7119 17.3213 24.8309V26.1702C17.3213 26.2893 17.3808 26.3488 17.4999 26.3488H24.1511V33.3577C24.1511 33.4767 24.2106 33.5363 24.3297 33.5363H25.669C25.788 33.5363 25.8476 33.4767 25.8476 33.3577V26.3488H32.4999C32.6189 26.3488 32.6784 26.2893 32.6784 26.1702V24.8309C32.6784 24.7119 32.6189 24.6523 32.4999 24.6523H25.8476V17.6434C25.8476 17.5244 25.788 17.4648 25.669 17.4648Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="Action-pattern"
          x1="13.1048"
          y1="-19.375"
          x2="59.2184"
          y2="-7.54431"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#61A3FF" />
          <stop offset="1" stopColor="#1472F2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ActionIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={ActionSVG} {...props} />;
};

export default ActionIcon;
