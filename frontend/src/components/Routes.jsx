import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </Switch>
  );
};

export default Routes;
