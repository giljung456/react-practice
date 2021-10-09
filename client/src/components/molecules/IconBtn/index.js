import { Btn, Icon } from "../../atoms";

function IconBtn({ btnProps, iconProps }) {
  return (
    <Btn {...btnProps}>
      <Icon {...iconProps}></Icon>
    </Btn>
  );
}

export default IconBtn;
