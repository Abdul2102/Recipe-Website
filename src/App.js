import { Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Cooking Light</Logo>
        
      </Nav>
      {!process.env.REACT_APP_FOOD_API_KEY ? (
        <p>
          Please get the API key from{" "}
          <strong>
            <a href="https://spoonacular.com/food-api/">Spoonacular Food Api</a>
          </strong>
          <br />
          <br />
          and add it in your env file with{" "}
          <strong>"REACT_APP_FOOD_API_KEY"</strong> name and restart the app
        </p>
      ) : (
        <>
          <Search />
          <Category />
          <Pages />
        </>
      )}
    </div>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 4rem;
  background: linear-gradient(to right,rgb(50, 79, 212),rgb(50, 79, 212));
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
    color: white;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  color: white;
`;

export default App;
