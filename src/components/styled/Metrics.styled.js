import styled from "styled-components";

const Styles = styled.div`
  .employee-metrics {
    width: 35rem;
    height: 23rem;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 1rem;
    box-sizing: border-box;
  }

  .employee-metric-department {
    height: 33.333%;
    width: 100%;
    display: flex;
  }

  .employee-metric-department-icon {
    height: 100%;
    width: 20%;
    position: relative;
  }

  .employee-metric-department-icon-alignment {
    height: 100%;
    width: 140%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .employee-metric-department-icon-photo {
    height: 70px;
    width: 70px;
    background-size: cover;
  }

  .employee-metric-department-content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Open Sans", sans-serif;
  }

  .employee-metric-department-title {
    color: rgba(50, 50, 255, 1);
    font-size: 1.9rem;
    user-select: none;
  }

  .employee-metric-department-name {
    color: #202121;
    font-size: 1.1rem;
    opacity: 0.5;
    margin-top: 0.25rem;
  }

  .employee-metric-email {
    height: 33.333%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .employee-metric-email-icon {
    height: 100%;
    width: 20%;
    position: relative;
  }

  .employee-metric-email-icon-alignment {
    width: 140%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .employee-metric-email-icon-photo {
    height: 70px;
    width: 70px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .employee-metric-email-content {
    width: 80%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
  }

  .employee-metric-email-content::before {
    content: "";
    height: 100%;
    width: 80%;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    border-bottom: solid 1px rgb(230, 230, 230);
    border-top: solid 1px rgb(230, 230, 230);
    box-sizing: border-box;
  }

  .employee-metric-email-title {
    color: rgba(50, 50, 255, 1);
    font-size: 1.9rem;
    user-select: none;
  }

  .employee-metric-email-address {
    color: #202121;
    opacity: 0.5;
    font-size: 1.1rem;
    margin-top: 0.25rem;
  }

  .employee-metric-phone-number {
    height: 33.333%;
    width: 100%;
    display: flex;
  }

  .employee-metric-phone-number-icon {
    height: 100%;
    width: 20%;
    position: relative;
  }

  .employee-metric-phone-number-icon-alignment {
    height: 100%;
    width: 140%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .employee-metric-phone-number-icon-photo {
    height: 70px;
    width: 70px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .employee-metric-phone-number-content {
    width: 80%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Open Sans", sans-serif;
  }

  .employee-metric-phone-number-title {
    color: rgba(50, 50, 255, 1);
    font-size: 1.9rem;
    user-select: none;
  }

  .employee-metric-phone-number-digits {
    color: #202121;
    opacity: 0.5;
    font-size: 1.1rem;
    margin-top: 0.25rem;
  }

  @media only screen and (max-width: 1191px) {
    .employee-metrics {
      margin-left: 0rem;
    }
  }

  @media only screen and (max-width: 740px) {
    .employee-metrics {
      width: 23rem;
    }
  }
`;

export const Metrics = ({ targetEmployee }) => {
  return (
    <Styles>
      <div className={"employee-metrics"}>
        <div className={"employee-metric-department"}>
          <div className={"employee-metric-department-icon"}>
            <div className={"employee-metric-department-icon-alignment"}>
              <div
                style={{ backgroundImage: `url("/images/department.png")` }}
                className={"employee-metric-department-icon-photo"}
              ></div>
            </div>
          </div>
          <div className={"employee-metric-department-content"}>
            <h1 className={"employee-metric-department-title"}>Department</h1>
            <h2 className={"employee-metric-department-name"}>
              {targetEmployee.department}
            </h2>
          </div>
        </div>
        <div className={"employee-metric-email"}>
          <div className={"employee-metric-email-icon"}>
            <div className={"employee-metric-email-icon-alignment"}>
              <div
                style={{ backgroundImage: `url("/images/mail.png")` }}
                className={"employee-metric-email-icon-photo"}
              ></div>
            </div>
          </div>
          <div className={"employee-metric-email-content"}>
            <h1 className={"employee-metric-email-title"}>Email</h1>
            <h2 className={"employee-metric-email-address"}>
              {targetEmployee.email}
            </h2>
          </div>
        </div>
        <div className={"employee-metric-phone-number"}>
          <div className={"employee-metric-phone-number-icon"}>
            <div className={"employee-metric-phone-number-icon-alignment"}>
              <div
                style={{ backgroundImage: `url("/images/phone.png")` }}
                className={"employee-metric-phone-number-icon-photo"}
              ></div>
            </div>
          </div>
          <div className={"employee-metric-phone-number-content"}>
            <h1 className={"employee-metric-phone-number-title"}>
              Phone Number
            </h1>
            <h2 className={"employee-metric-phone-number-digits"}>
              {targetEmployee.phoneNumber}
            </h2>
          </div>
        </div>
      </div>
    </Styles>
  );
};
