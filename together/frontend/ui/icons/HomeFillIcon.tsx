import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const HomeFillSVG = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.1828 10.8363L11.5289 1.18943C11.4594 1.11979 11.3768 1.06453 11.2859 1.02683C11.1951 0.989132 11.0976 0.969727 10.9992 0.969727C10.9008 0.969727 10.8034 0.989132 10.7125 1.02683C10.6216 1.06453 10.539 1.11979 10.4695 1.18943L0.815625 10.8363C0.534375 11.1176 0.375 11.4996 0.375 11.898C0.375 12.7254 1.04766 13.398 1.875 13.398H2.89219V20.2816C2.89219 20.6965 3.22734 21.0316 3.64219 21.0316H9.49922V15.7816H12.1242V21.0316H18.3563C18.7711 21.0316 19.1063 20.6965 19.1063 20.2816V13.398H20.1234C20.5219 13.398 20.9039 13.241 21.1852 12.9574C21.7687 12.3715 21.7687 11.4222 21.1828 10.8363Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const HomeFillIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={HomeFillSVG} {...props} />;
};

export default HomeFillIcon;
