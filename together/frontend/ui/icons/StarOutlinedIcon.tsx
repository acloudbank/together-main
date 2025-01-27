import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const StarOutlinedSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="star-outlined-g">
        <path
          id="star-outlined-path"
          d="M22.6092 7.74577L15.8084 6.75738L12.7682 0.593983C12.6851 0.425233 12.5485 0.288626 12.3798 0.20559C11.9566 -0.00333829 11.4423 0.170769 11.2307 0.593983L8.19049 6.75738L1.3896 7.74577C1.2021 7.77255 1.03067 7.86095 0.899422 7.99488C0.740748 8.15796 0.653312 8.37738 0.656325 8.6049C0.659339 8.83242 0.752556 9.04944 0.915494 9.20827L5.83603 14.0056L4.67353 20.7797C4.64627 20.9373 4.66371 21.0993 4.72387 21.2475C4.78402 21.3957 4.8845 21.524 5.01389 21.618C5.14329 21.712 5.29642 21.7678 5.45594 21.7792C5.61546 21.7906 5.77497 21.757 5.91639 21.6824L11.9994 18.4842L18.0825 21.6824C18.2485 21.7708 18.4414 21.8002 18.6262 21.7681C19.0923 21.6877 19.4057 21.2458 19.3253 20.7797L18.1628 14.0056L23.0833 9.20827C23.2173 9.07702 23.3057 8.90559 23.3325 8.71809C23.4048 8.24934 23.078 7.81541 22.6092 7.74577ZM16.0923 13.3306L17.0592 18.9636L11.9994 16.3065L6.9396 18.9663L7.90656 13.3333L3.81371 9.3422L9.47085 8.51988L11.9994 3.39577L14.528 8.51988L20.1851 9.3422L16.0923 13.3306Z"
          fill="#1C1C1C"
        />
      </g>
    </svg>
  );
};

const StarOutlinedIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={StarOutlinedSVG} {...props} />;
};

export default StarOutlinedIcon;
