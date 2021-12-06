import '../css/EmployeeMetricLocationIcon.css';

const EmployeeMetricLocationIcon = () => {
    return (
        <div className={'employee-metric-location-icon'}>
            <div className={'employee-metric-location-icon-alignment'}>
                <div 
                style={{ backgroundImage: `url("/images/globe.png")` }}
                className={'employee-metric-location-icon-photo'}>
                </div>
            </div>
        </div>
    )
};

export default EmployeeMetricLocationIcon;