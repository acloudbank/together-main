import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const ExploreSVG = () => {
  return (
    <svg
      width="1em"
      height="1em"
      vertical-align="middle"
      fill="currentColor"
      overflow="hidden"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 465.066667c-25.813333 0-46.933333 21.12-46.933333 46.933333s21.12 46.933333 46.933333 46.933333a46.933333 46.933333 0 0 0 0-93.866666zM512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512c0 235.52 190.933333 426.666667 426.666667 426.666667s426.666667-191.146667 426.666667-426.666667c0-235.733333-190.933333-426.666667-426.666667-426.666667z m93.44 520.106667L256 768l162.56-349.44L768 256l-162.56 349.44z" />
    </svg>
  );
};

const ExploreFillIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={ExploreSVG} {...props} />;
};

export default ExploreFillIcon;
