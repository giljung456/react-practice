import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { githubAuth } from "../../apis/auth";
import route from "../../commons/constants/route";

function Auth() {
  const searchParams = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const code = searchParams.get("code");
  useEffect(() => {
    const fetchUserInfo = async () => {
      const { accessToken, nickname, profileURL } = await githubAuth(code);
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("nickname", nickname);
      window.localStorage.setItem("profileURL", profileURL);
      history.push(route.REGISTER);
      window.alert("추가 정보를 입력해주세요.");
    };

    fetchUserInfo();
  }, [code, history]);

  return <div></div>;
}

export default Auth;
