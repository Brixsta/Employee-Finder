import styled from "styled-components";

const Styles = styled.div`
  .employee-avatar {
    background-color: white;
    margin: 0rem 2rem 2rem 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 23rem;
  }

  .employee-avatar:nth-child(1),
  .employee-avatar:nth-child(2),
  .employee-avatar:nth-child(3) {
    margin-top: 4rem;
  }

  .employee-avatar:hover .employee-avatar-photo {
    transform: scale(1.1);
  }

  .employee-avatar-photo {
    height: 100%;
    width: 100%;
    background-color: green;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;
    background-repeat: no-repeat;
  }

  .employee-avatar-photo-container {
    overflow: hidden;
    height: 72%;
    width: 23rem;
  }

  .employee-avatar-text-container {
    height: 28%;
    width: 100%;
    font-family: "Open Sans", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  .employee-avatar-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem;
    box-sizing: border-box;
    position: relative;
    user-select: none;
  }

  .employee-avatar-text::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 100%;
    border-top: solid 1px rgb(230, 230, 230);
    border-bottom: solid 1px rgb(230, 230, 230);
  }

  .employee-avatar-text-name {
    color: rgba(50, 50, 255, 1);
    font-size: 1.3rem;
  }

  .employee-avatar-text-title {
    color: black;
    opacity: 0.4;
    font-size: 1rem;
  }

  @media only screen and (max-width: 450px) {
    .employee-avatar-photo {
      height: 14.7rem;
      width: 20rem;
      background-size: cover;
    }

    .employee-avatar-text-container {
      height: 5.3 rem;
      backgroud-color: purple;
    }

    .employee-avatar {
      margin: 0;
    }
  }
  @media only screen and (max-width: 340px) {
    .employee-avatar-photo {
      height: 12.49rem;
      width: 17rem;
      background-size: cover;
    }
  }
`;

export const Avatar = ({ name, title, grabEmployeeData, id }) => {
  const myName = name
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(" ");
  return (
    <Styles>
      <div
        id={id}
        onClick={(evt) => {
          grabEmployeeData(evt);
        }}
        className={"employee-avatar"}
      >
        <div className={"employee-avatar-photo-container"}>
          <div
            id={id}
            style={{ backgroundImage: `url("/images/${name} avatar.jpg")` }}
            className="employee-avatar-photo"
          ></div>
        </div>
        <div id={id} className={"employee-avatar-text-container"}>
          <div id={id} className={"employee-avatar-text"}>
            <h2 id={id} className={"employee-avatar-text-name"}>
              {myName}
            </h2>
            <h3 id={id} className={"employee-avatar-text-title"}>
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Styles>
  );
};
