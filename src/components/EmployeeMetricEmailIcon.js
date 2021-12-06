import "../css/EmployeeMetricEmailIcon.css";

const EmployeeMetricEmailIcon = () => {
    return (
        <div className={'employee-metric-email-icon'}>
            <div className={'employee-metric-email-icon-alignment'}>
                <div 
                style={{ backgroundImage: `url("/images/mail.png")` }}
                className={'employee-metric-email-icon-photo'}>
                </div>
            </div>
        </div>
    )
};

export default EmployeeMetricEmailIcon;