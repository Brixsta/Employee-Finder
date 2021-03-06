import styled from "styled-components";

const Styles = styled.div`
  input {
    padding: 0.8rem 1.5rem;
    border: none;
    user-select: none;
    border-radius: 30px;
    width: 20rem;
    outline: none;
    font-size: 1.2rem;
    border: 1px solid rgb(210, 210, 210);
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  @media only screen and (max-width: 615px) {
    input {
      width: 16rem;
    }
  }
  @media only screen and (max-width: 550px) {
    input {
      width: 14rem;
    }
  }
  @media only screen and (max-width: 350px) {
    input {
      width: 12rem;
    }
  }
`;

export const SearchBar = ({
  updateFiltered,
  updateSearchBarText,
  searchBarText,
}) => (
  <Styles>
    <input
      placeholder={"Enter Name"}
      value={searchBarText}
      onChange={(evt) => {
        updateFiltered(evt.target.value);
        updateSearchBarText(evt.target.value);
      }}
      type="text"
    ></input>
  </Styles>
);
