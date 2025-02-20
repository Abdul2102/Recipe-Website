import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchTerm}`);
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          // placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button><a href="/">Get Started</a></button>
    </Form>
  );
};

const Form = styled.form`
  

  div {
    position: relative;
    width: 100%;
    height: 600px;
    background-image: url("https://img.freepik.com/free-photo/top-view-delicious-food-with-copy-space_23-2150857936.jpg?t=st=1739989049~exp=1739992649~hmac=83cb61cfcfaaa4bcf7851fb69d74396297064c26ca7ae358dab0b107fb85d9be&w=1380");
    background-size: cover;
    background-position: center;
  }

  input {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(35deg,rgb(255, 255, 255),rgb(255, 255, 255));
    font-size: 1.5rem;
    color: #333;
    padding: 0.5rem 3rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    aling-items: center;
    width: min(350px, 100%);
    margin-top: 1rem;
  }
    button{
    position: absolute;
    top: 65%;
    right: 45%;
    transform: translate(0, -50%);
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background: linear-gradient(to right,rgb(225, 33, 242),rgb(255, 0, 89));
    border: none;
    a{
    text-decoration: none;
    color: #fff;
    
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    }
    
    }

  svg {
    position: absolute;
    left: 38%;
    top: 51%;
    z-index: 1;
    transform: translate(100%, -50%);
    color: black;
    margin-top: 0.5rem;
  }
`;
export default Search;
