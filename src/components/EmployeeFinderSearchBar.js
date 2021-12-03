import '../css/EmployeeFinderSearchBar.css';

const EmployeeFinderSearchBar = (props) => {
    const { updateFiltered } = props;

    return (
        <input 
            onChange={(evt)=>{
                updateFiltered(evt.target.value);
            }}
            className={"employee-finder-search-bar"}type="text">
        </input>
    )
}

export default EmployeeFinderSearchBar;