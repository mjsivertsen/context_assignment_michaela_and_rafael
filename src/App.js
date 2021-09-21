import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom"
import { Container } from "semantic-ui-react"
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/UserProfile" 
          render={ () => <UserProfile /> } />
        </Switch>
      </Container>
    </>
  );
}

export default App;
