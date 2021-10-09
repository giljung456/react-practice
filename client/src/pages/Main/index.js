import { Header, TodoList } from "../../components/organisms";
import { user, add, chat } from "../../assets/icons";
import "./index.scss";

function Main() {
  const today = `${String(new Date().getFullYear())}.${String(new Date().getMonth() + 1)}.${String(new Date().getDate())}`;
  return (
    <div className="page-main">
      <Header
        title="Todo"
        onTitleClick={() => console.log("메인 페이지로 이동")}
        date={today}
        navMenus={[
          {
            src: user,
            width: "24px",
            height: "24px",
            alt: "user",
            onClick: () => console.log("유저 페이지로 이동"),
          },
          {
            src: add,
            width: "24px",
            height: "24px",
            alt: "add",
            onClick: () => console.log("할 일 추가 페이지로 이동"),
          },
          {
            src: chat,
            width: "24px",
            height: "24px",
            alt: "chat",
            onClick: () => console.log("채팅 페이지로 이동"),
          },
        ]}
      ></Header>
      <main>
        <TodoList
          todos={[
            {
              title: "할 일 0",
              id: 0,
            },
            {
              title: "할 일 1",
              id: 1,
            },
            {
              title: "할 일 2",
              id: 2,
            },
            {
              title: "할 일 3",
              id: 3,
            },
          ]}
        ></TodoList>
      </main>
    </div>
  );
}

export default Main;
