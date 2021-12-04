import '../css/EmployeeProfileHeaderContent.css';

const EmployeeProfileHeaderContent = (props) => {
    const { updateDisplayProfile } = props;
    return (
        <div className={'employee-profile-header-content'}>
            <button 
            className={"go-back-button"}
            onClick={()=>{
                updateDisplayProfile();
            }}>Go Back</button>
        </div>
    )
}
export default EmployeeProfileHeaderContent;