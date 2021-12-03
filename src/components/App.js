import '../css/App.css';
import EmployeeFinderHeader from './EmployeeFinderHeader';
import EmployeeFinderContent from './EmployeeFinderContent';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  constructor () {
    super();


    this.state = {
      employees: [
        {
          name: "Cristian Perez",
          id: uuidv4(),
          age: 58,
          department: "Finance",
          title: "CEO",
          email: "Joe_Exotic@corp.com",
          phoneNumber: "(287)-321-0213",
          hireDate: "January 9, 2004",
        },
        {
          name: "Tyler Watson",
          id: uuidv4(),
          age: 58,
          department: "Accounting",
          title: "Controller",
          email: "John_Finaly@corp.com",
          phoneNumber: "(498)-132-9988",
          hireDate: "February 19, 2014",
        },
        {
          name: "Sarah Saxton",
          id: uuidv4(),
          age: 58,
          department: "Marketing",
          title: "Director of Marketing",
          email: "Travis_Maldonado@corp.com",
          phoneNumber: "(913)-139-1111",
          hireDate: "September 21, 2020",
        },
        {
          name: "Kim Baskin",
          id: uuidv4(),
          age: 60,
          department: "Human Resources",
          title: "Human Resources Specialist I",
          email: "Carol_Baskin@corp.com",
          phoneNumber: "(676)-333-3232",
          hireDate: "March 4, 2018",
        },
        {
          name: "Jeff Tims",
          id: uuidv4(),
          age: 56,
          department: "Finance",
          title: "CFO",
          email: "Jeff_Lowe@corp.com",
          phoneNumber: "(101)-913-3004",
          hireDate: "December 16, 2016",
        },
        {
          name: "Tyler Antle",
          id: uuidv4(),
          age: 61,
          department: "Accounting",
          title: "Senior Auditor",
          email: "Bhagavan_Antle@corp.com",
          phoneNumber: "(424)-126-1593",
          hireDate: "August 31, 2015",
        },
        {
          name: "Catrina White",
          id: uuidv4(),
          age: 42,
          department: "IT",
          title: "IT Specialist I",
          email: "Tim_Stark@corp.com",
          phoneNumber: "(312)-309-9831",
          hireDate: "June 15, 2021",
        },
        {
          name: "Will Reinke",
          id: uuidv4(),
          age: 48,
          department: "Legal",
          title: "Paralegal III",
          email: "John_Reinke@corp.com",
          phoneNumber: "(981)-131-3333",
          hireDate: "April 19, 2008",
        },
        {
          name: "Kelci Kind",
          id: uuidv4(),
          age: 35,
          department: "Marketing",
          title: "Advertising Executive",
          email: "Kelci_Saffery@corp.com",
          phoneNumber: "(503)-231-8848",
          hireDate: "April 5, 2019",
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
        },
        {
          name: "Richard Holder",
          id: uuidv4(),
          age: 68,
          department: "IT",
          title: "IT Specialist II",
          email: "Howard_Baskin@corp.com",
          phoneNumber: "(143)-444-1616",
          hireDate: "May 1, 2011",
        },
      ],
      filtered: null,
      targetEmployee: ''
    }

    this.updateFiltered = this.updateFiltered.bind(this);
    this.grabEmployeeData = this.grabEmployeeData.bind(this);
  }

  componentDidMount () {
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

    console.log(this.state.targetEmployee)
  }
  

  render () {
    const { employees, filtered } = this.state;

    return (
      <div className={'wrapper'}>
        <EmployeeFinderHeader 
        updateFiltered={this.updateFiltered}
        />
        <EmployeeFinderContent 
        filtered={filtered}
        employees={employees}
        grabEmployeeData={this.grabEmployeeData}
        />
      </div>
    );
  }
}

export default App;
