import '../css/EmployeeMetricEmail.css';
import EmployeeMetricEmailIcon from './EmployeeMetricEmailIcon';
import EmployeeMetricEmailContent from './EmployeeMetricEmailContent';

const EmployeeMetricEmail = (props) => {
    const { email } = props;
    return (
        <div className={'employee-metric-email'}>
            <EmployeeMetricEmailIcon />
            <EmployeeMetricEmailContent 
            email={email}
            />
        </div>
    )
}

export default EmployeeMetricEmail;