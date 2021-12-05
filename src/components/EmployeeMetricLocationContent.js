import '../css/EmployeeMetricLocationContent.css';

const EmployeeMetricLocationContent = (props) => {
    const { location } = props;
    return (
        <div className={'employee-metric-location-content'}>
            <h1 className={'employee-metric-location-title'}>Location</h1>
            <h2 className={'employee-metric-location-address'}>{location}</h2>
        </div>
    )
};

export default EmployeeMetricLocationContent;