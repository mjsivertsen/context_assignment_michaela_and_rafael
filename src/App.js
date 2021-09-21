import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom"
import { Container } from "semantic-ui-react"
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import './App.css';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/UserProfile" 
          render={ () => <UserProfile /> } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
