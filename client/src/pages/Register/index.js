import { Btn } from "../../components/atoms";
import { IdPasswordForm } from "../../components/organisms";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../apis/auth";
import route from "../../commons/constants/route";

function Register() {
  const history = useHistory();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async () => {
    await register(id, password);
    history.push(route.MAIN);
  };
  const onIdChange = ({ target }) => {
    setId(target.value);
  };
  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div className="page-register">
      <main>
        <IdPasswordForm onIdChange={onIdChange} onPasswordChange={onPasswordChange} idPlaceholder="사용하실 아이디를 입력해주세요." passwordPlaceholder="사용하실 비밀번호를 입력해주세요."></IdPasswordForm>
        <Btn className="register-btn" onClick={onSubmit}>
          {"회원가입"}
        </Btn>
      </main>
    </div>
  );
}

export default Register;
