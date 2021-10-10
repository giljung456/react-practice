import { Main, Start, Auth, Register } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import route from "./commons/constants/route";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={route.MAIN} component={Main} exact></Route>
        <Route path={route.START} component={Start}></Route>
        <Route path={route.AUTH} component={Auth}></Route>
        <Route path={route.REGISTER} component={Register}></Route>
      </Router>
    </div>
  );
}

export default App;
