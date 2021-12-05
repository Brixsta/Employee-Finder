import '../css/EmployeeMetricPhoneNumber.css';
import EmployeeMetricPhoneNumberContent from './EmployeeMetricPhoneNumberContent';
import EmployeeMetricPhoneNumberIcon from './EmployeeMetricPhoneNumberIcon';

const EmployeeMetricPhoneNumber = (props) => {
    const { phoneNumber } = props;
    return (
        <div className={'employee-metric-phone-number'}>
            <EmployeeMetricPhoneNumberIcon />
            <EmployeeMetricPhoneNumberContent
            phoneNumber={phoneNumber}
            />
        </div>
    )
};

export default EmployeeMetricPhoneNumber;