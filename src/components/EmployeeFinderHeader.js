import EmployeeFinderHeaderContent from './EmployeeFinderHeaderContent';
import '../css/EmployeeFinderHeader.css';

const EmployeeFinderHeader = (props) => {
    const { updateFiltered } = props;
    return (
        <header className="employee-finder-header">
            <EmployeeFinderHeaderContent 
            updateFiltered={updateFiltered}
            />
        </header>
    );
}

export default EmployeeFinderHeader;