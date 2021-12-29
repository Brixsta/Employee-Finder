import styled from "styled-components";
import { Metrics } from "./Metrics.styled";

const Styles = styled.div`
  .employee-profile-content {
    width: 100%;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    // background-color: orange;
    box-sizing: border-box;
  }

  .employee-spotlight {
    height: 22.5rem;
    width: 22.5rem;
    background-color: white;
    margin-top: 0rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .employee-spotlight-photo {
    width: 100%;
    height: 17rem;
    background-color: black;
  }

  .employee-spotlight-text-container {
    height: 90px;
    width: 360px;
    background-color: white;
    font-family: "Open Sans", sans-serif;
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

  @media only screen and (max-width: 1191px) {
    .employee-spotlight {
      margin-bottom: 2rem;
    }

    .employee-profile-content {
      justify-content: center;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1191px) {
    .employee-spotlight {
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }

  @media only screen and (max-width: 740px) {
    .employee-metrics {
      width: 22.5rem;
    }

    .employee-metric-department-title,
    .employee-metric-email-title,
    .employee-metric-phone-number-title {
      font-size: 1.5rem;
    }

    .employee-metric-department-icon-alignment {
    }

    .employee-metric-department-icon-photo,
    .employee-metric-email-icon-photo,
    .employee-metric-phone-number-icon-photo {
      height: 3.5rem;
      width: 3.5rem;
    }
  }

  @media only screen and (max-width: 470px) {
    .employee-metrics {
      width: 18rem;
    }

    .employee-profile-content {
      padding: 0;
      padding: 2rem 0rem;
    }

    .employee-spotlight {
      width: 18rem;
      height: 20rem;
    }

    .employee-spotlight-photo {
      height: 15rem;
      background-size: cover;
    }

    .employee-spotlight-text-container {
      height: 5rem;
    }

    .employee-spotlight-text-container {
      width: 18rem;
    }

    .employee-metric-department-icon-photo,
    .employee-metric-email-icon-photo,
    .employee-metric-phone-number-icon-photo {
      height: 3rem;
      width: 3rem;
    }

    .employee-metric-department-title,
    .employee-metric-email-title,
    .employee-metric-phone-number-title {
      font-size: 1.3rem;
    }

    .employee-metric-department-name,
    .employee-metric-email-address,
    .employee-metric-phone-number-digits {
      font-size: 1rem;
    }
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
