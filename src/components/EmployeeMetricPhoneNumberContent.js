import '../css/EmployeeMetricPhoneNumberContent.css';

const EmployeeMetricPhoneNumberContent = (props) => {
    const { phoneNumber } = props;
    return (
        <div className={'employee-metric-phone-number-content'}>
            <h1 className={'employee-metric-phone-number-title'}>Phone Number</h1>
            <h2 className={'employee-metric-phone-number-digits'}>{phoneNumber}</h2>
        </div>
    )
}

export default EmployeeMetricPhoneNumberContent;