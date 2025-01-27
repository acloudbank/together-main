import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const LoveYouGestureIconSVG = () => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="72" height="72" fill="url(#LoveYourGesture-pattern)" />
      <defs>
        <pattern
          id="LoveYourGesture-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#LoveYourGesture-image"
            transform="scale(0.0138889)"
          />
        </pattern>
        <image
          id="LoveYourGesture-image"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const LoveYouGestureIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={LoveYouGestureIconSVG} {...props} />;
};

export default LoveYouGestureIcon;
