import { Btn } from "../../atoms";
import { IconBtn } from "../../molecules";
import "./index.scss";

function Header({ date, title, onTitleClick, navMenus }) {
  const navMenuList = navMenus.map((menu, idx) => {
    return (
      <IconBtn
        btnProps={{
          onClick: menu.onClick,
        }}
        iconProps={{
          src: menu.src,
          width: menu.width,
          height: menu.height,
          alt: menu.alt,
        }}
        key={String(idx)}
      ></IconBtn>
    );
  });
  return (
    <header className="header">
      <Btn className="title" onClick={onTitleClick}>
        {title}
      </Btn>
      <div className="date">{date}</div>
      <div className="nav-menus">{navMenuList}</div>
    </header>
  );
}

export default Header;
