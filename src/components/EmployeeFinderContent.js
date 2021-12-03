import '../css/EmployeeFinderContent.css';
import EmployeeAvatar from './EmployeeAvatar';

const EmployeeFinderContent = (props) => {
    const { employees, filtered, grabEmployeeData } = props;

    employees.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });

    return (
        <div className={'employee-finder-content'}>
      {filtered === null
        ? employees.map((person) => {
            return (
              <EmployeeAvatar
                name={person.name}
                title={person.title}
                // displayEmployeesProfile={displayEmployeesProfile}
                grabEmployeeData={grabEmployeeData}
                id={person.id}
                key={person.id}
              />
            );
          })
        : filtered.map((person) => {
            return (
              <EmployeeAvatar
                name={person.name}
                title={person.title}
                // displayEmployeesProfile={displayEmployeesProfile}
                grabEmployeeData={grabEmployeeData}
                id={person.id}
                key={person.id}
              />
            );
          })}
    </div>
    );
}

export default EmployeeFinderContent;