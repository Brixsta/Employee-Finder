import "../css/EmployeeSpotlightText.css";

const EmployeeSpotlightText = (props) => {
    const { title } = props;

// capitalize first letter of firstName and first letter of lastName
  const name = props.name
  .split(" ")
  .map((i) => i[0].toUpperCase() + i.slice(1))
  .join(" ");
  
    return (
        <div className={"employee-spotlight-text-container"}>
            <div className={"employee-spotlight-text"}>
                <h2 className={"employee-spotlight-text-name"}>{name}</h2>
                <h3 className={"employee-spotlight-text-title"}>{title}</h3>
            </div>
        </div>
    )
}

export default EmployeeSpotlightText;