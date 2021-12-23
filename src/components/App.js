import "../css/App.css";
import React from "react";
import { Content } from "./styled/Content.styled";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./styled/Header.styled";
import { Profile } from "./styled/Profile.styled";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: "Cristian Perez",
          id: uuidv4(),
          age: 58,
          department: "Finance",
          title: "CEO",
          email: "Cristian_Perez@corp.com",
          phoneNumber: "(287)-321-0213",
          hireDate: "January 9, 2004",
          location: "New York, NY",
        },
        {
          name: "Tyler Watson",
          id: uuidv4(),
          age: 58,
          department: "Accounting",
          title: "Controller",
          email: "Tyler_Watson@corp.com",
          phoneNumber: "(498)-132-9988",
          hireDate: "February 19, 2014",
          location: "San Franciso, CA",
        },
        {
          name: "Sarah Saxton",
          id: uuidv4(),
          age: 58,
          department: "Marketing",
          title: "Director of Marketing",
          email: "Sarah_Saxton@corp.com",
          phoneNumber: "(913)-139-1111",
          hireDate: "September 21, 2020",
          location: "Portland, OR",
        },
        {
          name: "Kim Baskin",
          id: uuidv4(),
          age: 60,
          department: "Human Resources",
          title: "Human Resources Specialist I",
          email: "Kim_Baskin@corp.com",
          phoneNumber: "(676)-333-3232",
          hireDate: "March 4, 2018",
          location: "Baltimore, Maryland",
        },
        {
          name: "Jeff Tims",
          id: uuidv4(),
          age: 56,
          department: "Finance",
          title: "CFO",
          email: "Jeff_Tims@corp.com",
          phoneNumber: "(101)-913-3004",
          hireDate: "December 16, 2016",
          location: "Antioch, California",
        },
        {
          name: "Tyler Antle",
          id: uuidv4(),
          age: 61,
          department: "Accounting",
          title: "Senior Auditor",
          email: "Tyler_Antle@corp.com",
          phoneNumber: "(424)-126-1593",
          hireDate: "August 31, 2015",
          location: "Austin, TX",
        },
        {
          name: "Catrina White",
          id: uuidv4(),
          age: 42,
          department: "IT",
          title: "IT Specialist I",
          email: "Catrina_White@corp.com",
          phoneNumber: "(312)-309-9831",
          hireDate: "June 15, 2021",
          location: "Houston, TX",
        },
        {
          name: "Will Reinke",
          id: uuidv4(),
          age: 48,
          department: "Legal",
          title: "Paralegal III",
          email: "Will_Reinke@corp.com",
          phoneNumber: "(981)-131-3333",
          hireDate: "April 19, 2008",
          location: "Canton, OH",
        },
        {
          name: "Kelci Kind",
          id: uuidv4(),
          age: 35,
          department: "Marketing",
          title: "Advertising Executive",
          email: "Kelci_Kind@corp.com",
          phoneNumber: "(503)-231-8848",
          hireDate: "April 5, 2019",
          location: "San Francisco, CA",
        },
        {
          name: "Don Lewis",
          id: uuidv4(),
          age: 64,
          department: "Accounting",
          title: "Staff Accountant",
          email: "Don_Lewis@corp.com",
          phoneNumber: "(613)-676-8390",
          hireDate: "August 10, 2020",
          location: "Houston, TX",
        },
        {
          name: "Richard Holder",
          id: uuidv4(),
          age: 68,
          department: "IT",
          title: "IT Specialist II",
          email: "Richard_Holder@corp.com",
          phoneNumber: "(143)-444-1616",
          hireDate: "May 1, 2011",
          location: "Austin, TX",
        },
        {
          name: "Erica Sanders",
          id: uuidv4(),
          age: 38,
          department: "Legal",
          title: "Legal Analyst",
          email: "Erica_Sanders@corp.com",
          phoneNumber: "(493)-940-1006",
          hireDate: "May 11, 2011",
          location: "Houston, TX",
        },
        {
          name: "Diane Martin",
          id: uuidv4(),
          age: 35,
          department: "Finance",
          title: "Financial Analyst",
          email: "Diane_Martin@corp.com",
          phoneNumber: "(223)-240-2206",
          hireDate: "January 11, 2018",
          location: "Austin, TX",
        },
        {
          name: "Hahn Lee",
          id: uuidv4(),
          age: 45,
          department: "Finance",
          title: "COO",
          email: "Hahn_Lee@corp.com",
          phoneNumber: "(653)-545-9210",
          hireDate: "June 16, 2009",
          location: "San Antonio, TX",
        },
        {
          name: "Jason Cho",
          id: uuidv4(),
          age: 39,
          department: "Human Resources",
          title: "Director of Human Resources",
          email: "Jason_Cho@corp.com",
          phoneNumber: "(566)-995-2981",
          hireDate: "August 1, 2020",
          location: "Denver, CO",
        },
      ],
      filtered: null,
      targetEmployee: "",
      displayProfile: false,
      searchBarText: "",
    };

    this.updateFiltered = this.updateFiltered.bind(this);
    this.grabEmployeeData = this.grabEmployeeData.bind(this);
    this.updateDisplayProfile = this.updateDisplayProfile.bind(this);
    this.updateSearchBarText = this.updateSearchBarText.bind(this);
  }

  componentDidMount() {
    // make all employee names lowercase
    let employees = this.state.employees;

    for (let i = 0; i < employees.length; i++) {
      employees[i].name = employees[i].name.toLowerCase();
    }
    this.setState({ employees: employees });
  }

  updateFiltered(value) {
    value = value.toLowerCase();
    const employees = this.state.employees;
    const filtered = employees.filter((person) =>
      person.name.slice(0, value.length).match(value)
    );

    this.setState({ filtered: filtered });
  }

  grabEmployeeData(value) {
    const employees = this.state.employees;

    employees.forEach((employee) => {
      if (employee.id === value.target.id) {
        this.setState({ targetEmployee: employee });
      }
    });
  }

  updateDisplayProfile() {
    this.setState({ displayProfile: !this.state.displayProfile });
  }

  updateSearchBarText(value) {
    this.setState({ searchBarText: value });
  }

  render() {
    const { employees, filtered, targetEmployee, searchBarText } = this.state;

    return (
      <div className={"wrapper"}>
        {this.state.displayProfile === false && (
          <Header
            updateFiltered={this.updateFiltered}
            updateSearchBarText={this.updateSearchBarText}
            searchBarText={searchBarText}
          ></Header>
        )}
        {this.state.displayProfile === false && (
          <Content
            filtered={filtered}
            employees={employees}
            grabEmployeeData={this.grabEmployeeData}
            updateDisplayProfile={this.updateDisplayProfile}
          ></Content>
        )}
        {this.state.displayProfile && (
          <div className={"employee-profile-header"}>
            <div className={"employee-profile-header-content"}>
              <button
                className={"go-back-button"}
                onClick={() => {
                  this.updateDisplayProfile();
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
        {this.state.displayProfile && (
          <Profile targetEmployee={targetEmployee}></Profile>
        )}
      </div>
    );
  }
}

export default App;
