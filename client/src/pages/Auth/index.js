import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../../apis/auth";
import route from "../../commons/constants/route";

function Auth() {
  const searchParams = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const code = searchParams.get("code");
  useEffect(() => {
    const fetchUserInfo = async () => {
      await login(code);
      history.push(route.MAIN);
    };

    fetchUserInfo();
  }, []);

  return <div></div>;
}

export default Auth;
