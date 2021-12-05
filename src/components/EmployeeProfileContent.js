import "../css/EmployeeProfileContent.css";
import EmployeeSpotlight from "./EmployeeSpotlight";
import EmployeeMetrics from "./EmployeeMetrics";

const EmployeeProfileContent = (props) => {
    const { targetEmployee } = props;
    return (
        <div className={'employee-profile-content'}>
            <EmployeeSpotlight 
            targetEmployee={targetEmployee}
            />
            <EmployeeMetrics 
            targetEmployee={targetEmployee}
            />
        </div>
    )
}

export default EmployeeProfileContent;