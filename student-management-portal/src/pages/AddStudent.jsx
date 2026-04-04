import {useState} from "react"

import {addStudent} from "../services/studentService"

function AddStudent(){

const [student,setStudent]= useState({

name:"",

email:"",

age:""

})

const handleChange=(e)=>{

setStudent({...student,[e.target.name]:e.target.value})

}

const handleSubmit=(e)=>{

e.preventDefault()

addStudent(student)

.then(res=>{

alert("Student added successfully")

setStudent({name:"",email:"",age:""})

})

.catch(err=>console.log(err))

}

return(

<div>

<h1 className="text-2xl font-bold mb-4">Add Student</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<div>

<label className="block mb-1">Name</label>

<input

type="text"

name="name"

value={student.name}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Email</label>

<input

type="email"

name="email"

value={student.email}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Age</label>

<input

type="number"

name="age"

value={student.age}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Student</button>

</form>

</div>

)

}

export default AddStudent