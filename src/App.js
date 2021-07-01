import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import LandingPage from "./LandingPage";
import { ProtectedRoute } from "./ProtectedRoute";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute path="/app" component={AppLayout} />
          <Route path="*" component={() => "404 not found!".toUpperCase()} />
        </Switch>
      </Router>
    </div>
  );
}
