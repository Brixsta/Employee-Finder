import styled from "styled-components";
import { Metrics } from "./Metrics.styled";

const Styles = styled.div`
  .employee-profile-content {
    width: 1440px;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .employee-spotlight {
    height: 360px;
    width: 360px;
    background-color: white;
    margin: 4rem 2rem;
  }

  .employee-spotlight-photo {
    width: 100%;
    height: 270px;
    background-color: black;
  }

  .employee-spotlight-text-container {
    height: 90px;
    width: 360px;
    background-color: white;
    font-family: "Roboto Slab", serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .employee-spotlight-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem;
    box-sizing: border-box;
    position: relative;
    user-select: none;
  }

  .employee-spotlight-text::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 100%;
    border-top: solid 1px rgb(230, 230, 230);
    border-bottom: solid 1px rgb(230, 230, 230);
  }

  .employee-spotlight-text-name {
    color: rgba(50, 50, 255, 1);
    font-size: 1.3rem;
  }

  .employee-spotlight-text-title {
    color: black;
    opacity: 0.4;
    font-size: 1rem;
  }
`;

export const Profile = ({ targetEmployee }) => {
  const name = targetEmployee.name
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(" ");
  return (
    <Styles>
      <div className={"employee-profile-content"}>
        <div className={"employee-spotlight"}>
          <div
            style={{
              backgroundImage: `url("/images/${name} avatar.jpg")`,
            }}
            className={"employee-spotlight-photo"}
          ></div>

          <div className={"employee-spotlight-text-container"}>
            <div className={"employee-spotlight-text"}>
              <h2 className={"employee-spotlight-text-name"}>{name}</h2>
              <h3 className={"employee-spotlight-text-title"}>
                {targetEmployee.title}
              </h3>
            </div>
          </div>
        </div>
        <Metrics targetEmployee={targetEmployee}></Metrics>
      </div>
    </Styles>
  );
};
