import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const HomeSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.6398 11.8109L13.2898 1.46625L12.5961 0.772501C12.438 0.615474 12.2243 0.527344 12.0014 0.527344C11.7786 0.527344 11.5649 0.615474 11.4068 0.772501L0.363057 11.8109C0.201087 11.9722 0.0730793 12.1644 -0.0134101 12.376C-0.0998995 12.5876 -0.143118 12.8144 -0.140514 13.043C-0.1298 13.9859 0.655022 14.7386 1.59788 14.7386H2.73627V23.4627H21.2666V14.7386H22.4291C22.8872 14.7386 23.3184 14.5591 23.6425 14.235C23.8021 14.0759 23.9286 13.8868 24.0145 13.6785C24.1005 13.4702 24.1443 13.2469 24.1434 13.0216C24.1434 12.5663 23.9639 12.135 23.6398 11.8109ZM13.5014 21.5341H10.5014V16.0698H13.5014V21.5341ZM19.3381 12.81V21.5341H15.2157V15.427C15.2157 14.835 14.7363 14.3555 14.1443 14.3555H9.85859C9.26663 14.3555 8.78716 14.835 8.78716 15.427V21.5341H4.66484V12.81H2.09341L12.0041 2.90732L12.6229 3.52607L21.9122 12.81H19.3381Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const HomeIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={HomeSVG} {...props} />;
};

export default HomeIcon;
