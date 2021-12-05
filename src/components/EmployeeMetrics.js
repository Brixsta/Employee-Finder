import "../css/EmployeeMetrics.css";
import EmployeeMetricEmail from "./EmployeeMetricEmail";
import EmployeeMetricPhoneNumber from "./EmployeeMetricPhoneNumber";
import EmployeeMetricLocation from "./EmployeeMetricLocation";

const EmployeeMetrics = (props) => {
    const { targetEmployee } = props;
    const email = targetEmployee.email;
    const phoneNumber = targetEmployee.phoneNumber;
    const location = targetEmployee.location;

    console.log(targetEmployee)
    return (
        <div className={'employee-metrics'}>
            <EmployeeMetricEmail 
            email={email}
            />
            <EmployeeMetricPhoneNumber 
            phoneNumber={phoneNumber}
            />
            <EmployeeMetricLocation 
            location={location}
            />
        </div>
    )
}

export default EmployeeMetrics;