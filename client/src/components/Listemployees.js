import React, { Fragment, useEffect, useState } from 'react';


const Listemployees = () => {
  const [employees, setemployees] = useState([]);


  const getemployees = async() => {
    try {

      const response = await fetch("http://54.146.243.36:5000/employee");
      console.log(response);
      const jsonData = await response.json();

      setemployees(jsonData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getemployees();
  }, []);

    return  (
    <Fragment>
      <table className="table mt-6 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
          <tr key={employee.employee_id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
    );
};


export default Listemployees;