import "../css/EmployeeAvatar.css";
import EmployeeAvatarPhoto from "./EmployeeAvatarPhoto";
import EmployeeAvatarText from "./EmployeeAvatarText";

const EmployeeAvatar = (props) => {
  const { title, grabEmployeeData, id } = props;

  // capitalize first letter of firstName and first letter of lastName
  const name = props.name
  .split(" ")
  .map((i) => i[0].toUpperCase() + i.slice(1))
  .join(" ");
  
    return (
        <div 
        id={id}
        onClick={(evt)=>{
            grabEmployeeData(evt);
        }}
        className={"employee-avatar"}>
            <EmployeeAvatarPhoto 
            name={name}
            id={id}
            />
            <EmployeeAvatarText 
            name={name}
            id={id}
            title={title}
            /> 
        </div>
    )
}

export default EmployeeAvatar;