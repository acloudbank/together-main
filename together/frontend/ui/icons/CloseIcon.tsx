import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const CloseSVG = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3866 8.99874L17.4178 0.617495C17.5357 0.478209 17.4366 0.266602 17.2545 0.266602H15.117C14.9911 0.266602 14.8705 0.322851 14.7875 0.41928L8.98839 7.33267L3.18928 0.41928C3.10892 0.322851 2.98838 0.266602 2.85981 0.266602H0.722313C0.54017 0.266602 0.441063 0.478209 0.55892 0.617495L7.59017 8.99874L0.55892 17.38C0.532519 17.411 0.515582 17.449 0.510118 17.4894C0.504655 17.5298 0.510895 17.5709 0.528099 17.6078C0.545302 17.6448 0.572746 17.676 0.607172 17.6978C0.641598 17.7196 0.681559 17.7311 0.722313 17.7309H2.85981C2.98571 17.7309 3.10624 17.6746 3.18928 17.5782L8.98839 10.6648L14.7875 17.5782C14.8678 17.6746 14.9884 17.7309 15.117 17.7309H17.2545C17.4366 17.7309 17.5357 17.5193 17.4178 17.38L10.3866 8.99874Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const CloseIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={CloseSVG} {...props} />;
};

export default CloseIcon;
