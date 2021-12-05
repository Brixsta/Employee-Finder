import "../css/EmployeeSpotlightPhoto.css";

const EmployeeSpotlightPhoto = (props) => {
    const { name } = props;
    return (
        <div 
        style={{ backgroundImage: `url("/images/${name} avatar.jpg")` }}
        className={"employee-spotlight-photo"}>

        </div>
    )
};

export default EmployeeSpotlightPhoto;