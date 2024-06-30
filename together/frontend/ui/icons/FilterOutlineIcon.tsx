import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const FilterOutlineSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Active=False">
        <path
          id="Vector"
          d="M21.8596 2.41406H2.14001C1.48376 2.41406 1.07393 3.12924 1.4034 3.69978L7.63376 14.2908V20.7355C7.63376 21.2096 8.01411 21.5926 8.48554 21.5926H15.5141C15.9855 21.5926 16.3659 21.2096 16.3659 20.7355V14.2908L22.5989 3.69978C22.9257 3.12924 22.5159 2.41406 21.8596 2.41406ZM14.448 19.6641H9.55161V15.4855H14.4507V19.6641H14.448ZM14.7052 13.3266L14.4507 13.7712H9.54893L9.29447 13.3266L3.98286 4.34263H20.0168L14.7052 13.3266Z"
          fill="#1C1C1C"
        />
      </g>
    </svg>
  );
};

const FilterOutlineIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={FilterOutlineSVG} {...props} />;
};

export default FilterOutlineIcon;
