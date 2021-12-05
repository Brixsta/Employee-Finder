import "../css/EmployeeSpotlight.css";
import EmployeeSpotlightPhoto from "./EmployeeSpotlightPhoto";
import EmployeeSpotlightText from "./EmployeeSpotlightText";

const EmployeeSpotlight = (props) => {
    const { targetEmployee } = props;
    return (
        <div className={'employee-spotlight'}>
            <EmployeeSpotlightPhoto 
            name={targetEmployee.name}
            />
            <EmployeeSpotlightText 
            name={targetEmployee.name}
            title={targetEmployee.title}
            />
        </div>
    )
};

export default EmployeeSpotlight;