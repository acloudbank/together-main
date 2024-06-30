import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const LoadingSVG = () => {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="Ellipse 684"
        cx="22.5"
        cy="22"
        r="20"
        transform="rotate(90 22.5 22)"
        stroke="url(#loading-pattern)"
        stroke-width="4"
      />
      <defs>
        <linearGradient
          id="loading-pattern"
          x1="22.5"
          y1="-1.90735e-06"
          x2="22.5"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3084F7" />
          <stop offset="1" stopColor="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const LoadingIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={LoadingSVG} {...props} />;
};

export default LoadingIcon;
