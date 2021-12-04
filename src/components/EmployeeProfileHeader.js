import "../css/EmployeeProfileHeader.css";
import EmployeeProfileHeaderContent from './EmployeeProfileHeaderContent';

const EmployeeProfileHeader = (props) => {
    const { updateDisplayProfile } = props;
    return (
        <header className={'employee-profile-header'}>
            <EmployeeProfileHeaderContent 
            updateDisplayProfile={updateDisplayProfile}
            />
        </header>
    )
}

export default EmployeeProfileHeader;