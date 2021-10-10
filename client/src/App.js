import { Main, Start, Auth } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import route from "./commons/constants/route";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={route.MAIN} component={Main} exact></Route>
        <Route path={route.START} component={Start}></Route>
        <Route path={route.AUTH} component={Auth}></Route>
      </Router>
    </div>
  );
}

export default App;
