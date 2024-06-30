import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const ShareOutlinedSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="share-outlined-g">
        <path
          id="share-outlined-path"
          d="M18.4289 16.0714C17.6655 16.0714 16.961 16.3393 16.4092 16.7866L10.8592 12.7714C10.9521 12.2613 10.9521 11.7387 10.8592 11.2286L16.4092 7.21339C16.961 7.66071 17.6655 7.92857 18.4289 7.92857C20.2021 7.92857 21.6431 6.4875 21.6431 4.71429C21.6431 2.94107 20.2021 1.5 18.4289 1.5C16.6556 1.5 15.2146 2.94107 15.2146 4.71429C15.2146 5.025 15.2574 5.32232 15.3405 5.60625L10.069 9.42321C9.28689 8.38661 8.04403 7.71429 6.64314 7.71429C4.27528 7.71429 2.35742 9.63214 2.35742 12C2.35742 14.3679 4.27528 16.2857 6.64314 16.2857C8.04403 16.2857 9.28689 15.6134 10.069 14.5768L15.3405 18.3938C15.2574 18.6777 15.2146 18.9777 15.2146 19.2857C15.2146 21.0589 16.6556 22.5 18.4289 22.5C20.2021 22.5 21.6431 21.0589 21.6431 19.2857C21.6431 17.5125 20.2021 16.0714 18.4289 16.0714ZM18.4289 3.32143C19.1976 3.32143 19.8217 3.94554 19.8217 4.71429C19.8217 5.48304 19.1976 6.10714 18.4289 6.10714C17.6601 6.10714 17.036 5.48304 17.036 4.71429C17.036 3.94554 17.6601 3.32143 18.4289 3.32143ZM6.64314 14.3571C5.34403 14.3571 4.28599 13.2991 4.28599 12C4.28599 10.7009 5.34403 9.64286 6.64314 9.64286C7.94224 9.64286 9.00028 10.7009 9.00028 12C9.00028 13.2991 7.94224 14.3571 6.64314 14.3571ZM18.4289 20.6786C17.6601 20.6786 17.036 20.0545 17.036 19.2857C17.036 18.517 17.6601 17.8929 18.4289 17.8929C19.1976 17.8929 19.8217 18.517 19.8217 19.2857C19.8217 20.0545 19.1976 20.6786 18.4289 20.6786Z"
          fill="#1C1C1C"
        />
      </g>
    </svg>
  );
};

const ShareOutlinedIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={ShareOutlinedSVG} {...props} />;
};

export default ShareOutlinedIcon;