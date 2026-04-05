import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"

import Table from "../components/Table"

import {getStudents} from "../services/studentService"

function Student(){

const [students,setStudents]=useState([])
const navigate = useNavigate()

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'age', label: 'Age' }
]

useEffect(()=>{

getStudents()

.then(res=>{

setStudents(res.data)

})

.catch(err=>console.log(err))

},[])

const handleAddStudent = () => {
  navigate("/add-student")
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

<Table data={students} columns={columns}/>

</div>

)

}

export default Student