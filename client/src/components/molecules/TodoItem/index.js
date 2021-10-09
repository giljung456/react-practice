import { IconBtn } from "../../molecules";
import { check, close } from "../../../assets/icons";

import "./index.scss";

function TodoItem({ content, onItemDelete, onItemChange, id }) {
  const onDeleteBtnClick = () => {
    onItemDelete(id);
  };

  const onFinishBtnClick = () => {
    onItemChange(id);
  };

  return (
    <div className="todo-item">
      <div className="content">{content}</div>
      <div className="todo-menus">
        <IconBtn
          btnProps={{
            onClick: onFinishBtnClick,
          }}
          iconProps={{
            src: check,
            width: "24px",
            height: "24px",
            alt: "check",
          }}
        ></IconBtn>
        <IconBtn
          btnProps={{
            onClick: onDeleteBtnClick,
          }}
          iconProps={{
            src: close,
            width: "24px",
            height: "24px",
            alt: "close",
          }}
        ></IconBtn>
      </div>
    </div>
  );
}

export default TodoItem;
