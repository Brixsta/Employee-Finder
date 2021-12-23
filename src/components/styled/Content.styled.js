import styled from "styled-components";
import { Avatar } from "./Avatar.styled";

const Styles = styled.div`
  .employee-finder-content {
    width: 1440px;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = ({
  employees,
  filtered,
  grabEmployeeData,
  updateDisplayProfile,
}) => {
  employees.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  return (
    <Styles>
      <div onClick={updateDisplayProfile} className={"employee-finder-content"}>
        {filtered === null
          ? employees.map((person) => {
              return (
                <Avatar
                  name={person.name}
                  title={person.title}
                  // displayEmployeesProfile={displayEmployeesProfile}
                  grabEmployeeData={grabEmployeeData}
                  id={person.id}
                  key={person.id}
                ></Avatar>
              );
            })
          : filtered.map((person) => {
              return (
                <Avatar
                  name={person.name}
                  title={person.title}
                  // displayEmployeesProfile={displayEmployeesProfile}
                  grabEmployeeData={grabEmployeeData}
                  id={person.id}
                  key={person.id}
                ></Avatar>
              );
            })}
      </div>
    </Styles>
  );
};