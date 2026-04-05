import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"

import Table from "../components/Table"

import {getCourses} from "../services/courseService"

function Course(){

const [courses,setCourses]=useState([])
const navigate = useNavigate()

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'course_name', label: 'Course Name' },
  { key: 'description', label: 'Description' },
  { key: 'duration', label: 'Duration' },
  { key: 'fees', label: 'Fees' },
  { key: 'max_students', label: 'Max Students' }
]

useEffect(()=>{

getCourses()

.then(res=>{

setCourses(res.data)

})

.catch(err=>console.log(err))

},[])

const handleAddCourse = () => {
  navigate("/add-course")
}

return(

<div>

<div className="flex items-center justify-between mb-4">
  <h1 className="text-2xl font-bold">Courses</h1>
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    onClick={handleAddCourse}
  >
    Add Course
  </button>
</div>

<Table data={courses} columns={columns}/>

</div>

)

}

export default Course