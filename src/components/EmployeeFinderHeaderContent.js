import '../css/EmployeeFinderHeaderContent.css';
import EmployeeFinderHeaderTitle from './EmployeeFinderHeaderTitle';
import EmployeeFinderSearchBar from './EmployeeFinderSearchBar';

const EmployeeFinderHeaderContent = (props) => {
    const { updateFiltered } = props;

    return (
        <div className={'employee-finder-header-content'}>
            <EmployeeFinderHeaderTitle />
            <EmployeeFinderSearchBar 
            updateFiltered={updateFiltered}
            />
        </div>
    );
} 

export default EmployeeFinderHeaderContent;