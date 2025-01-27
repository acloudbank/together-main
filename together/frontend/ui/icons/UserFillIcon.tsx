import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const UserFillSVG = () => {
  return (
    <svg
      width="1em"
      height=" 1em"
      vertical-align="middle"
      fill="currentColor"
      overflow="hidden"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M170.666667 938.666667a341.333333 341.333333 0 1 1 682.666666 0H170.666667z m341.333333-384c-141.44 0-256-114.56-256-256s114.56-256 256-256 256 114.56 256 256-114.56 256-256 256z" />
    </svg>
  );
};

const UserFillIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={UserFillSVG} {...props} />;
};

export default UserFillIcon;
