import { Btn } from "../../components/atoms";
import "./index.scss";

function Start() {
  const clientId = "973842d0d0be4f973835";
  const callbackURL = "http://localhost:3000/auth";
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${callbackURL}`;
  return (
    <div className="page-start">
      <div className="title">ToDo</div>
      <Btn onClick={() => (window.location.href = url)} className="register-btn">
        Github 계정으로 시작하기
      </Btn>
    </div>
  );
}

export default Start;
