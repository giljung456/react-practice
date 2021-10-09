import { Btn, Img } from "../../atoms";

function IconBtn({ btnProps, iconProps }) {
  return (
    <Btn {...btnProps}>
      <Img {...iconProps}></Img>
    </Btn>
  );
}

export default IconBtn;
