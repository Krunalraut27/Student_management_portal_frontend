import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"

import Table from "../components/Table"

import {getStudents, deleteStudent} from "../services/studentService"

function Student(){

const [students,setStudents]=useState([])
const navigate = useNavigate()

const columns = [
  { key: 'srNo', label: 'Sr No' },
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'courseName', label: 'Course Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone Number' },
  { key: 'actions', label: 'Actions' }
]

useEffect(()=>{

getStudents()

.then(res=>{

console.log('API Response:', res.data);

setStudents(res.data)

})

.catch(err=>console.log(err))

},[])

const handleAddStudent = () => {
  navigate("/add-student")
}

const handleEdit = (student) => {
  navigate("/add-student", { state: { student } })
}

const handleDelete = (student) => {
  if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
    deleteStudent(student.id)
      .then(() => {
        // Refresh the list after deletion
        getStudents().then(res => setStudents(res.data)).catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }
}

return(

<div>

<div className="flex items-center justify-between mb-4">
  <h1 className="text-2xl font-bold">Students</h1>
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    onClick={handleAddStudent}
  >
    Add Student
  </button>
</div>

<Table data={students} columns={columns} onEdit={handleEdit} onDelete={handleDelete}/>

</div>

)

}

export default Student