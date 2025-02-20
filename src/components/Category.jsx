import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisines/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisines/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisines/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisines/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  border-radius: 30%;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  :hover{
  background: linear-gradient(to right,rgb(225, 33, 242),rgb(255, 0, 89));
  }

  &.active {
    background: linear-gradient(to right,rgb(225, 33, 242),rgb(255, 0, 89));
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;
export default Category;
