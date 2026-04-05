import { useEffect, useState } from "react";
import {deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
const ListEmployeeComponent = () => {
  const [employees, setEmployees] =  useState([]);

  const navigator = useNavigate(); 
  function getAllEmployees(){
      listEmployees().then((response) => {
          setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    useEffect(() => {
      getAllEmployees();
      }, [])
    

function Addnewemployee(){
navigator('/add-employee');
}


function updateEmployee(id){
    navigator(`/edit-employee/${id}`);
}

function removeEmployee(id){
console.log(id);
deleteEmployee(id).then(() => {
  getAllEmployees();
}).catch(error => {
    console.error(error);
})
}
return (
<div className='container'>
<h2 className='text-center'>List Of Employees</h2>
<table className='table table-striped table-bordered '>
    <thead>
        <tr>
            <th>Employee Id</th>
            <th>Employee Firstname</th>
            <th>Employee Lastname</th>
            <th>Employee Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
            employees.map(
                employee =>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td className="d-flex gap-3">
                        <button className="btn btn-info" onClick={()=>updateEmployee(employee.id)}>Update</button> 
                      <button className="btn btn-danger" onClick={()=>removeEmployee(employee.id)}>Delete</button>
                    </td>
                </tr>
            )
        }
    </tbody>
</table>
<hr />
<button className='btn btn-primary' onClick={Addnewemployee}>Add Employee</button>
</div>
)
}

export default ListEmployeeComponent;