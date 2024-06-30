import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const DirectHitSVG = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#DirectHit-pattern)" />
      <defs>
        <pattern
          id="DirectHit-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#DirectHit-image" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="DirectHit-image"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const DirectHitIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={DirectHitSVG} {...props} />;
};

export default DirectHitIcon;
