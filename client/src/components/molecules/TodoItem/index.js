import { IconBtn } from "../../molecules";
import { check, close } from "../../../assets/icons";
import "./index.scss";

function TodoItem({ title }) {
  return (
    <div className="todo-item">
      <div className="title">{title}</div>
      <div className="todo-menus">
        <IconBtn
          btnProps={{
            onClick: () => console.log("한 일 체크"),
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
            onClick: () => console.log("할 일 삭제"),
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
