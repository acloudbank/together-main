import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { RefAttributes } from "react";

const ExitFullScreenSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75929 4.73778C8.73786 4.56099 8.5209 4.48599 8.39501 4.61189L7.22447 5.78242L3.64322 2.20385C3.60295 2.16397 3.54856 2.1416 3.49188 2.1416C3.4352 2.1416 3.38082 2.16397 3.34054 2.20385L2.20483 3.33689C2.16495 3.37716 2.14258 3.43155 2.14258 3.48823C2.14258 3.5449 2.16495 3.59929 2.20483 3.63957L5.78608 7.22082L4.61019 8.39671C4.58186 8.42517 4.56209 8.46102 4.55313 8.50016C4.54417 8.5393 4.54637 8.58017 4.55949 8.61813C4.5726 8.65608 4.59611 8.68959 4.62733 8.71485C4.65854 8.7401 4.69622 8.75609 4.73608 8.761L9.02715 9.26725C9.16376 9.28332 9.28162 9.16814 9.26554 9.02885L8.75929 4.73778ZM9.02983 14.7342L4.73608 15.2405C4.55929 15.2619 4.48429 15.4789 4.61019 15.6047L5.78608 16.7806L2.20483 20.3565C2.16495 20.3968 2.14258 20.4512 2.14258 20.5079C2.14258 20.5646 2.16495 20.6189 2.20483 20.6592L3.34054 21.7922C3.42358 21.8753 3.56019 21.8753 3.64322 21.7922L7.22447 18.2137L8.39501 19.3842C8.42347 19.4125 8.45931 19.4323 8.49846 19.4413C8.5376 19.4502 8.57847 19.448 8.61643 19.4349C8.65438 19.4218 8.68789 19.3983 8.71315 19.3671C8.7384 19.3359 8.75439 19.2982 8.75929 19.2583L9.26554 14.9699C9.28162 14.8333 9.16644 14.7181 9.02983 14.7342ZM14.9709 9.26457L19.2647 8.75832C19.4414 8.73689 19.5164 8.51992 19.3905 8.39403L18.2147 7.22082L21.7959 3.64224C21.8789 3.55921 21.8789 3.4226 21.7959 3.33957L20.6602 2.20653C20.6199 2.16665 20.5655 2.14428 20.5088 2.14428C20.4522 2.14428 20.3978 2.16665 20.3575 2.20653L16.7763 5.78242L15.6057 4.61189C15.5773 4.58356 15.5414 4.5638 15.5023 4.55483C15.4631 4.54587 15.4223 4.54807 15.3843 4.56119C15.3464 4.5743 15.3128 4.59781 15.2876 4.62903C15.2623 4.66025 15.2463 4.69793 15.2414 4.73778L14.7352 9.02617C14.7191 9.16546 14.8343 9.28064 14.9709 9.26457ZM18.2147 16.778L19.3905 15.6021C19.4189 15.5736 19.4386 15.5378 19.4476 15.4986C19.4566 15.4595 19.4544 15.4186 19.4412 15.3807C19.4281 15.3427 19.4046 15.3092 19.3734 15.2839C19.3422 15.2587 19.3045 15.2427 19.2647 15.2378L14.9736 14.7315C14.837 14.7155 14.7191 14.8306 14.7352 14.9699L15.2414 19.261C15.2629 19.4378 15.4798 19.5128 15.6057 19.3869L16.7763 18.2164L20.3575 21.7949C20.4405 21.878 20.5772 21.878 20.6602 21.7949L21.7959 20.6619C21.8789 20.5789 21.8789 20.4422 21.7959 20.3592L18.2147 16.778Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

const ExitFullScreenIcon = (
  props: JSX.IntrinsicAttributes &
    IconComponentProps &
    RefAttributes<HTMLSpanElement>
): JSX.Element => {
  return <Icon component={ExitFullScreenSVG} {...props} />;
};

export default ExitFullScreenIcon;
