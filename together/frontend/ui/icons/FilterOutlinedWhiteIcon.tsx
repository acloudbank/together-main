import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const FilterOutlinedWhiteSVG = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Filter">
        <path
          id="Vector"
          d="M18.216 2.01172H1.78301C1.23614 2.01172 0.89462 2.6077 1.16917 3.08315L6.36114 11.909V17.2796C6.36114 17.6747 6.6781 17.9939 7.07096 17.9939H12.9281C13.321 17.9939 13.6379 17.6747 13.6379 17.2796V11.909L18.8321 3.08315C19.1044 2.6077 18.7629 2.01172 18.216 2.01172ZM12.0397 16.3867H7.95935V12.9046H12.0419V16.3867H12.0397ZM12.254 11.1055L12.0419 11.476H7.95712L7.74507 11.1055L3.31873 3.61886H16.6803L12.254 11.1055Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

const FilterOutlinedWhiteIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={FilterOutlinedWhiteSVG} {...props} />;
};

export default FilterOutlinedWhiteIcon;
