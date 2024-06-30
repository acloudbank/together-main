import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const AlienMonsterSVG = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#AlienMonster-pattern)" />
      <defs>
        <pattern
          id="AlienMonster-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#AlienMonster-image" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="AlienMonster-image"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const AlienMonsterIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={AlienMonsterSVG} {...props} />;
};

export default AlienMonsterIcon;
