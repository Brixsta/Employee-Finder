import styled from "styled-components";
import { SearchBar } from "./SearchBar.styled";

const Styles = styled.div`
  .employee-finder-header {
    height: 80px;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: space-between;
    /* border-bottom: 1px solid rgba(158, 98, 64, 0.3); */
    border-bottom: 1px solid rgb(210, 210, 210);
    box-sizing: border-box;
    padding: 1rem;
  }

  h1 {
    margin-left: 10rem;
    font-family: "Pacifico", cursive;
    font-size: 2rem;
    color: rgb(50, 50, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    margin-top: -10px;
  }
`;

export const Header = ({
  updateFiltered,
  updateSearchBarText,
  searchBarText,
}) => (
  <Styles>
    <header className={"employee-finder-header"}>
      <h1>Employee Finder</h1>
      <SearchBar
        updateFiltered={updateFiltered}
        updateSearchBarText={updateSearchBarText}
        searchBarText={searchBarText}
      ></SearchBar>
    </header>
  </Styles>
);
