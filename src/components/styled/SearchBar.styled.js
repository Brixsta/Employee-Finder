import styled from "styled-components";

const Styles = styled.div`
  input {
    padding: 0.8rem 1.5rem;
    border: none;
    user-select: none;
    margin-right: 10rem;
    border-radius: 30px;
    width: 20rem;
    outline: none;
    font-size: 1.2rem;
    border: 1px solid rgb(210, 210, 210);
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
`;

export const SearchBar = ({
  updateFiltered,
  updateSearchBarText,
  searchBarText,
}) => (
  <Styles>
    <input
      value={searchBarText}
      onChange={(evt) => {
        updateFiltered(evt.target.value);
        updateSearchBarText(evt.target.value);
      }}
      type="text"
    ></input>
  </Styles>
);
