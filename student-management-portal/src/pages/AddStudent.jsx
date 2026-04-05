import {useState, useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom"

import {addStudent, updateStudent} from "../services/studentService"
import {getCourses} from "../services/courseService"

function AddStudent(){

const location = useLocation()
const navigate = useNavigate()
const editingStudent = location.state?.student

const [student,setStudent]= useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  courseId: "",
  isActive: true,
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  country: ""
})

const [courses, setCourses] = useState([])

useEffect(() => {
  getCourses()
    .then(res => {
      setCourses(res.data.value || res.data)
    })
    .catch(err => console.log(err))
}, [])

useEffect(() => {
  if (editingStudent) {
    setStudent({
      firstName: editingStudent.firstName || "",
      lastName: editingStudent.lastName || "",
      email: editingStudent.email || "",
      phone: editingStudent.phone || "",
      age: editingStudent.age?.toString() || "",
      gender: editingStudent.gender || "",
      courseId: editingStudent.course?.id?.toString() || "",
      isActive: editingStudent.isActive ?? true,
      addressLine1: editingStudent.addressLine1 || "",
      addressLine2: editingStudent.addressLine2 || "",
      city: editingStudent.city || "",
      state: editingStudent.state || "",
      postalCode: editingStudent.postalCode || "",
      country: editingStudent.country || ""
    })
  }
}, [editingStudent])

const handleChange=(e)=>{
  const { name, value, type, checked } = e.target
  setStudent({
    ...student,
    [name]: type === 'checkbox' ? checked : value
  })
}

const handleSubmit=(e)=>{
  e.preventDefault()
  const data = {
    ...student,
    course: { id: Number(student.courseId) },
    age: Number(student.age),
    isActive: student.isActive
  }
  delete data.courseId
  console.log("Submitting student:", data)
  if (editingStudent) {
    updateStudent(editingStudent.id, data)
      .then(res => {
        alert("Student updated successfully")
        navigate("/students")
      })
      .catch(err => {
        console.error("Student update error", {
          status: err.response?.status,
          data: err.response?.data,
          message: err.message,
          config: err.config
        })
        const errorMessage = err.response?.data?.message || err.response?.data || err.message || "Unable to update student"
        alert(errorMessage)
      })
  } else {
    addStudent(data)
      .then(res => {
        alert("Student added successfully")
        setStudent({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          age: "",
          gender: "",
          courseId: "",
          isActive: true,
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          postalCode: "",
          country: ""
        })
      })
      .catch(err => {
        console.error("Student submit error", {
          status: err.response?.status,
          data: err.response?.data,
          message: err.message,
          config: err.config
        })
        const errorMessage = err.response?.data?.message || err.response?.data || err.message || "Unable to add student"
        alert(errorMessage)
      })
  }
}

return(

<div className="max-w-4xl mx-auto p-6">

<h1 className="text-2xl font-bold mb-6">{editingStudent ? "Edit Student" : "Add Student"}</h1>

<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div>

<label className="block mb-1">First Name</label>

<input

type="text"

name="firstName"

value={student.firstName}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Last Name</label>

<input

type="text"

name="lastName"

value={student.lastName}

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

<label className="block mb-1">Phone</label>

<input

type="text"

name="phone"

value={student.phone}

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

<div>

<label className="block mb-1">Gender</label>

<div className="flex space-x-4">

<label className="flex items-center">

<input

type="radio"

name="gender"

value="Male"

checked={student.gender === "Male"}

onChange={handleChange}

className="mr-2"

/>

Male

</label>

<label className="flex items-center">

<input

type="radio"

name="gender"

value="Female"

checked={student.gender === "Female"}

onChange={handleChange}

className="mr-2"

/>

Female

</label>

</div>

</div>

<div>

<label className="block mb-1">Course</label>

<select

name="courseId"

value={student.courseId}

onChange={handleChange}

className="w-full p-2 border rounded"

required

>

<option value="">Select Course</option>

{courses.map(course => (

<option key={course.id} value={course.id}>{course.courseName}</option>

))}

</select>

</div>

<div>

<label className="block mb-1">Address Line 1</label>

<input

type="text"

name="addressLine1"

value={student.addressLine1}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Address Line 2</label>

<input

type="text"

name="addressLine2"

value={student.addressLine2}

onChange={handleChange}

className="w-full p-2 border rounded"

/>

</div>

<div>

<label className="block mb-1">City</label>

<input

type="text"

name="city"

value={student.city}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">State</label>

<input

type="text"

name="state"

value={student.state}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Postal Code</label>

<input

type="text"

name="postalCode"

value={student.postalCode}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
  <div>
    <label className="block mb-1">Country</label>
    <input
      type="text"
      name="country"
      value={student.country}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
    />
  </div>
  <div className="flex items-center space-x-3">
    <span className="block mb-1">Status</span>
    <button
      type="button"
      onClick={() => setStudent({...student, isActive: !student.isActive})}
      className={`relative inline-flex h-7 w-12 flex-none rounded-full transition ${student.isActive ? 'bg-green-500' : 'bg-gray-300'}`}
    >
      <span className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${student.isActive ? 'translate-x-5' : ''}`} />
    </button>
    <span className="text-sm font-medium">{student.isActive ? 'Active' : 'Inactive'}</span>
  </div>
</div>

<div className="flex items-center space-x-4">

<button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">{editingStudent ? "Update Student" : "Add Student"}</button>

</div>

</form>

</div>

)

}

export default AddStudent