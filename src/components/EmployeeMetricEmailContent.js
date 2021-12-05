import '../css/EmployeeMetricEmailContent.css';

const EmployeeMetricEmailContent = (props) => {
    const { email } = props;
    return (
        <div className={'employee-metric-email-content'}>
            <h1 className={'employee-metric-email-title'}>Email</h1>
            <h2 className={'employee-metric-email-address'}>{email}</h2>
        </div>
    )
};

export default EmployeeMetricEmailContent;