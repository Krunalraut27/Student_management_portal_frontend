import {useState}

from "react"

import {addStudent} from "../services/StudentService"

function AddStudent(){

const [student,setStudent]=

useState({

name:"",
email:"",
age:""

})

const handleChange=(e)=>{

setStudent({

...student,

[e.target.name]:

e.target.value

})

}

const handleSubmit=(e)=>{

e.preventDefault()

addStudent(student)

.then(()=>{

alert("Saved")

})

}

return(

<div>

<h1 className="text-2xl mb-5">

Add Student

</h1>

<form

onSubmit={handleSubmit}

className="bg-white p-5 shadow">

<input

name="name"

placeholder="Name"

onChange={handleChange}

className="border p-2 w-full mb-3"

/>

<input

name="email"

placeholder="Email"

onChange={handleChange}

className="border p-2 w-full mb-3"

/>

<input

name="age"

placeholder="Age"

onChange={handleChange}

className="border p-2 w-full mb-3"

/>

<button

className="bg-blue-600 text-white px-4 py-2">

Save

</button>

</form>

</div>

)

}

export default AddStudent