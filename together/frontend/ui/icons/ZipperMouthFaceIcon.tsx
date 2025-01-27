import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const ZipperMouthFaceSVG = () => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="72" height="72" fill="url(#zipperMounthFace-pattern)" />
      <defs>
        <pattern
          id="zipperMounthFace-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#zipperMounthFace-image"
            transform="scale(0.0138889)"
          />
        </pattern>
        <image
          id="zipperMounthFace-image"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const ZipperMouthFaceIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={ZipperMouthFaceSVG} {...props} />;
};

export default ZipperMouthFaceIcon;
