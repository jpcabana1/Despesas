import "./App.css";
import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import Erro from "./components/Erro/Erro";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard" component={DashBoard} exact />
        <Route component={Erro} />
      </Switch>
    </div>
  );
}

export default App;
