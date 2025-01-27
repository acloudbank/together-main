import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const CustomPlusCircleSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#custom-plus-circle)">
        <path
          d="M16.9284 11.1441H12.8569V7.07268C12.8569 6.95483 12.7605 6.8584 12.6426 6.8584H11.3569C11.2391 6.8584 11.1426 6.95483 11.1426 7.07268V11.1441H7.07122C6.95336 11.1441 6.85693 11.2405 6.85693 11.3584V12.6441C6.85693 12.762 6.95336 12.8584 7.07122 12.8584H11.1426V16.9298C11.1426 17.0477 11.2391 17.1441 11.3569 17.1441H12.6426C12.7605 17.1441 12.8569 17.0477 12.8569 16.9298V12.8584H16.9284C17.0462 12.8584 17.1427 12.762 17.1427 12.6441V11.3584C17.1427 11.2405 17.0462 11.1441 16.9284 11.1441Z"
          fill="#475D67"
        />
        <path
          d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12 21.9643C6.49821 21.9643 2.03571 17.5018 2.03571 12C2.03571 6.49821 6.49821 2.03571 12 2.03571C17.5018 2.03571 21.9643 6.49821 21.9643 12C21.9643 17.5018 17.5018 21.9643 12 21.9643Z"
          fill="#475D67"
        />
      </g>
      <defs>
        <clipPath id="custom-plus-circle">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CustomPlusCircleIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={CustomPlusCircleSVG} {...props} />;
};

export default CustomPlusCircleIcon;
