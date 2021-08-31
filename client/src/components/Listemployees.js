import React, { Fragment, useEffect, useState } from 'react';
import Editemployee from './Editemployee';

const Listemployees = () => {
  const [employees, setemployees] = useState([]);

  
  const getemployees = async() => {
    try {

      const response = await fetch("http://54.146.243.36:5000/employees");
      console.log(response);
      const jsonData = await response.json();

      setemployees(jsonData);
      
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteemployees = async (id) => {
    try {
      const deleteemployees = await fetch(`hhttp://54.146.243.36:5000/delete/${id}`, {
        method: "DELETE"
      });

      setemployees(employees.filter(employees => employees.employee_id !== id))
      console.log(deleteemployees);
    } catch (err) {
      console.errror(err.message) 
    }
  }
    
  useEffect(() => {
    getemployees();
  }, []);

    return  ( 
    <Fragment>        
      <table className="table mt-6 text-center">
        <thead>
          <tr>
            <th>employee</th>
            <th>Edit employees Information</th>
            <th>Delete employees Information</th>
          </tr>
        </thead> 
        <tbody>
          {employees.map((employees) => (
          <tr key={employees.employees_id}>
            <td>{employees.name}</td>
            <td>
              <Editemployees employees={employees} />
            </td>
            <td>
              <button className="btn btn-light" onClick={() => deleteemployees(employees.employees_id)}>Delete employees</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
    );
};


export default Listemployees;
