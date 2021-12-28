import styled from "styled-components";
import { SearchBar } from "./SearchBar.styled";

const Styles = styled.div`
  .employee-finder-header {
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgb(210, 210, 210);
    box-sizing: border-box;
    padding: 1rem;
  }

  h1 {
    font-family: "Pacifico", cursive;
    font-size: 2rem;
    color: rgb(50, 50, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
  h2 {
    font-family: "Pacifico", cursive;
    font-size: 2rem;
    color: rgb(50, 50, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    display: none;
  }

  @media only screen and (max-width: 490px) {
    h1 {
      display: none;
      position: relative;
    }

    h2 {
      display: inline-block;
    }
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
      <h2>E F</h2>
      <SearchBar
        updateFiltered={updateFiltered}
        updateSearchBarText={updateSearchBarText}
        searchBarText={searchBarText}
      ></SearchBar>
    </header>
  </Styles>
);
