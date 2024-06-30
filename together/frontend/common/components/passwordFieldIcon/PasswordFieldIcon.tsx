import { EyeInvisibleOutlinedIcon, EyeTwoToneIcon } from "ui";

export const PasswordFieldIcon = (visible: boolean): JSX.Element => {
  return visible ? <EyeTwoToneIcon /> : <EyeInvisibleOutlinedIcon />;
};
