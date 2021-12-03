import "../css/EmployeeAvatarPhoto.css";

const EmployeeAvatarPhoto = (props) => {
    const { name, id } = props;

    return (
        <div 
        className={"employee-avatar-photo-container"}>
            <div 
            id={id}
            style={{ backgroundImage: `url("/images/${name} avatar.jpg")` }}
            className="employee-avatar-photo">
            </div>
        </div>
    );
}

export default EmployeeAvatarPhoto;