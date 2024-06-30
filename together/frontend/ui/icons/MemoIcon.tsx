import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const MemoSVG = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#memo-pattern)" />
      <defs>
        <pattern
          id="memo-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#memo-image" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="memo-image"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const MemoIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={MemoSVG} {...props} />;
};

export default MemoIcon;
