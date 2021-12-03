import "../css/EmployeeAvatarText.css";

const EmployeeAvatarText = (props) => {
    const { name, title, id } = props;
    return (
        <div 
        id={id}
        className={"employee-avatar-text-container"}>
            <div 
            id={id}
            className={"employee-avatar-text"}>
                <h2 
                id={id}
                className={"employee-avatar-text-name"}>{name}</h2>
                <h3 
                id={id}
                className={"employee-avatar-text-title"}>{title}</h3>
            </div>
        </div>
    )
}

export default EmployeeAvatarText;