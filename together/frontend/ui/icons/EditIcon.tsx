import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const EditSVG = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.18784 17.4261C4.24141 17.4261 4.29498 17.4207 4.34855 17.4127L8.85391 16.6225C8.90748 16.6118 8.95837 16.5877 8.99587 16.5475L20.3503 5.19302C20.3752 5.16824 20.3949 5.13881 20.4083 5.10641C20.4218 5.074 20.4287 5.03927 20.4287 5.00419C20.4287 4.9691 20.4218 4.93437 20.4083 4.90196C20.3949 4.86956 20.3752 4.84013 20.3503 4.81535L15.8986 0.360882C15.8477 0.309989 15.7807 0.283203 15.7084 0.283203C15.636 0.283203 15.5691 0.309989 15.5182 0.360882L4.16373 11.7153C4.12355 11.7555 4.09944 11.8037 4.08873 11.8573L3.29855 16.3627C3.27249 16.5062 3.2818 16.6538 3.32568 16.7929C3.36955 16.932 3.44666 17.0583 3.55033 17.1609C3.72712 17.3323 3.94944 17.4261 4.18784 17.4261V17.4261ZM5.99319 12.7546L15.7084 3.04213L17.6718 5.00552L7.95659 14.718L5.57534 15.1386L5.99319 12.7546V12.7546ZM20.8566 19.6761H1.1423C0.668192 19.6761 0.285156 20.0591 0.285156 20.5332V21.4975C0.285156 21.6153 0.381585 21.7118 0.499442 21.7118H21.4994C21.6173 21.7118 21.7137 21.6153 21.7137 21.4975V20.5332C21.7137 20.0591 21.3307 19.6761 20.8566 19.6761Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const EditIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={EditSVG} {...props} />;
};

export default EditIcon;
