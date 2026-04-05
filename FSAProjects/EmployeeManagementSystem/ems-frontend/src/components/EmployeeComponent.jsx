import React, { useEffect, useState } from 'react'
import { createEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom';
import { getEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {
 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
 const [email, setEmail] = useState('')

 const navigator = useNavigate();

const {id} =  useParams();
const [errors, setErrors]=useState({
    firstName: '',
    lastName: '',
    email: ''   
});

 useEffect(() => {
     if(id){
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);  
        }).catch(error => {
            console.error(error);
        })
     }
 },[id])
// second way of writing function
// const handlelastName=(e)=>setLastName(e.target.value);

// first way of writing function
function saveOrUpdateEmployee(e){
 e.preventDefault();
//
if(validateForm()){
    const employee = {firstName,lastName,email};
    console.log(employee);
    
     if(id){
        updateEmployee(id,employee).then((response) => {
            console.log(response.data);
            navigator('/employees');
        }).catch(error => {
            console.error(error);
        })
     }else{
         
         createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees');
         }).catch(error => {
            console.error(error);
         })
     }

}

}
//
function validateForm(){
    let Valid = true;
     const errorsCopy={...errors};

     if(firstName.trim()){
        errorsCopy.firstName='';
     }else{
        errorsCopy.firstName='Required First Name';
        Valid=false;
     }
     if(lastName.trim()){
            errorsCopy.lastName='';
     }else{
        errorsCopy.lastName='Required Last Name';
        Valid=false;
     }
     if(email.trim()){
               errorsCopy.email='';
     }else{
        errorsCopy.email='Required Email';
        Valid=false;
     }

     setErrors(errorsCopy);
   return Valid;
}

function pageTitle(){
    if(id){
        return <h2 className='text-center'>Update Employee</h2>
    }else{
        return <h2 className='text-center'>Add Employee</h2>
    }
}

return (
<div className='container'>
<div className='row'>
<div className='mt-5 card col-md-6 offset-md-3 offset-md-3'>
{ 
    pageTitle()
}
<div className='card-body'>
    <form action="">
        <div className='form-group mb-2'>
            <label className='form-label' htmlFor="">firstName: </label>
            <input 
            type="text" 
            name='firstNme'
            //
            className={`form-control ${errors.firstName ? 'is-invalid' : '' }`} 
            value={firstName} 
            placeholder='Enter Employee firstName'
            // third way is direct adding the function insidious This is Best Practice .
            onChange={(e)=>setFirstName(e.target.value)}/>
            {/* // */}
            {
                errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>
            }
        </div>
        <div className='form-group mb-2'>
            <label className='form-label' htmlFor="">lastName: </label>
            <input 
            type="text" 
            //
             className={`form-control ${errors.lastName ? 'is-invalid' : '' }`} 
            value={lastName} 
            name='lastNme'
            placeholder='Enter Employee lastName'
            onChange={(e)=>setLastName(e.target.value)}/>
{/* // */}
             {
                errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>
            }
        </div>
        <div className='form-group mb-2'>
            <label className='form-label' htmlFor="Email">Email: </label>
            <input 
            type="text" 
            //
            className={`form-control ${errors.email ? 'is-invalid' : '' }`} 
            value={email} 
            name='email'
            placeholder='Enter Employee Email'
            onChange={(e)=>setEmail(e.target.value)}/>
            {/* // */}
             {
                errors.email && <div className='invalid-feedback'>{errors.email}</div>
            }
        </div>
        <button className='btn btn-success'onClick={saveOrUpdateEmployee} >Save</button>
    </form>
            </div>
</div>
</div>
</div> 
 )
}

export default EmployeeComponent;