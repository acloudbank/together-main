import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const StarFilledSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.2831 8.27559L15.3323 7.41075L12.6722 2.01778C12.5995 1.87013 12.48 1.75059 12.3323 1.67794C11.962 1.49513 11.512 1.64747 11.3268 2.01778L8.66668 7.41075L2.7159 8.27559C2.55184 8.29903 2.40184 8.37638 2.28699 8.49356C2.14815 8.63627 2.07165 8.82825 2.07428 9.02733C2.07692 9.22642 2.15849 9.41631 2.30106 9.55528L6.60653 13.7529L5.58934 19.6803C5.56549 19.8182 5.58074 19.96 5.63338 20.0896C5.68602 20.2193 5.77394 20.3316 5.88716 20.4138C6.00038 20.496 6.13437 20.5449 6.27395 20.5549C6.41352 20.5648 6.5531 20.5355 6.67684 20.4701L11.9995 17.6717L17.3222 20.4701C17.4675 20.5475 17.6362 20.5732 17.7979 20.5451C18.2057 20.4748 18.48 20.0881 18.4097 19.6803L17.3925 13.7529L21.6979 9.55528C21.8151 9.44044 21.8925 9.29044 21.9159 9.12638C21.9792 8.71622 21.6932 8.33653 21.2831 8.27559Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const StarFilledIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={StarFilledSVG} {...props} />;
};

export default StarFilledIcon;
