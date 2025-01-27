import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const ShushingFaceIconSVG = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#shushingFace-pattern)" />
      <defs>
        <pattern
          id="shushingFace-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#shushingFace-image" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="shushingFace-image"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const ShushingFaceIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={ShushingFaceIconSVG} {...props} />;
};

export default ShushingFaceIcon;
