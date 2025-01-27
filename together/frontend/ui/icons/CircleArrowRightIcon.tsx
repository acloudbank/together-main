import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const CircleArrowRightSVG = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3751 15.5676L15.6287 9.71222C15.5769 9.66758 15.5109 9.64258 15.4412 9.64258H13.8609C13.7287 9.64258 13.668 9.80686 13.768 9.89258L20.0216 15.3211H9.57157C9.493 15.3211 9.42871 15.3854 9.42871 15.464V16.5354C9.42871 16.614 9.493 16.6783 9.57157 16.6783H20.0198L13.7662 22.1069C13.6662 22.1944 13.7269 22.3569 13.8591 22.3569H15.493C15.5269 22.3569 15.5609 22.3444 15.5859 22.3211L22.3751 16.4319C22.437 16.3781 22.4865 16.3117 22.5205 16.2372C22.5545 16.1626 22.572 16.0816 22.572 15.9997C22.572 15.9178 22.5545 15.8368 22.5205 15.7623C22.4865 15.6877 22.437 15.6213 22.3751 15.5676Z" fill="#1C1C1C"/>
    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#1C1C1C"/>
    </svg>
    
  );
};

const CircleArrowRightIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={CircleArrowRightSVG} {...props} />;
};

export default CircleArrowRightIcon;
