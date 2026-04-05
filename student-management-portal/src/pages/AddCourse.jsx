import {useState} from "react"

import {addCourse} from "../services/courseService"

function AddCourse(){

const [course,setCourse]= useState({

 course_name:"",
 description:"",
 duration:"",
 fees:"",
 max_students:""

})

const handleChange=(e)=>{

setCourse({...course,[e.target.name]:e.target.value})

}

const handleSubmit=(e)=>{

e.preventDefault()

addCourse(course)

.then(res=>{

alert("Course added successfully")

setCourse({course_name:"",description:"",duration:"",fees:"",max_students:""})

})

.catch(err=>console.log(err))

}

return(

<div>

<h1 className="text-2xl font-bold mb-4">Add Course</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<div>

<label className="block mb-1">Course Name

</label>


<input

type="text"

name="course_name"
placeholder="i.e Java FullStack"
value={course.course_name}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Description</label>

<textarea

name="description"

value={course.description}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Duration</label>

<input

type="text"

name="duration"

value={course.duration}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Fees</label>

<input

type="number"

name="fees"

value={course.fees}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Max Students</label>

<input

type="number"

name="max_students"

value={course.max_students}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Course</button>

</form>

</div>

)

}

export default AddCourse