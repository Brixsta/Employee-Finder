import '../css/EmployeeMetricPhoneNumberIcon.css';

const EmployeeMetricPhoneNumberIcon = () => {
    return (
        <div className={'employee-metric-phone-number-icon'}>
            <div className={'employee-metric-phone-number-icon-alignment'}>
                <div 
                style={{ backgroundImage: `url("/images/phone.png")` }}
                className={'employee-metric-phone-number-icon-photo'}>
                </div>
            </div>
        </div>
    )
};

export default EmployeeMetricPhoneNumberIcon;