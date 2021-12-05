import '../css/EmployeeMetricLocation.css';
import EmployeeMetricLocationContent from './EmployeeMetricLocationContent';
import EmployeeMetricLocationIcon from './EmployeeMetricLocationIcon';

const EmployeeMetricLocation = (props) => {
    const { location } = props;

    console.log(props)
    return (
        <div className={'employee-metric-location'}>
            <EmployeeMetricLocationIcon />
            <EmployeeMetricLocationContent 
            location={location}
            />
        </div>
    )
};

export default EmployeeMetricLocation;