import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const IssueSVG = () => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1757 6.01607L13.4114 0.251786C13.2507 0.0910715 13.0337 0 12.806 0H1.42746C0.953348 0 0.570312 0.383036 0.570312 0.857143V23.1429C0.570312 23.617 0.953348 24 1.42746 24H18.5703C19.0444 24 19.4275 23.617 19.4275 23.1429V6.62411C19.4275 6.39643 19.3364 6.17679 19.1757 6.01607ZM17.4507 7.01786H12.4096V1.97679L17.4507 7.01786ZM17.4989 22.0714H2.49888V1.92857H10.5882V7.71429C10.5882 8.01265 10.7067 8.2988 10.9177 8.50978C11.1287 8.72076 11.4148 8.83929 11.7132 8.83929H17.4989V22.0714ZM9.7846 14.8393H4.85603C4.73817 14.8393 4.64174 14.9357 4.64174 15.0536V16.3393C4.64174 16.4571 4.73817 16.5536 4.85603 16.5536H9.7846C9.90246 16.5536 9.99889 16.4571 9.99889 16.3393V15.0536C9.99889 14.9357 9.90246 14.8393 9.7846 14.8393ZM4.64174 11.4107V12.6964C4.64174 12.8143 4.73817 12.9107 4.85603 12.9107H15.1417C15.2596 12.9107 15.356 12.8143 15.356 12.6964V11.4107C15.356 11.2929 15.2596 11.1964 15.1417 11.1964H4.85603C4.73817 11.1964 4.64174 11.2929 4.64174 11.4107Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const IssueIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={IssueSVG} {...props} />;
};

export default IssueIcon;