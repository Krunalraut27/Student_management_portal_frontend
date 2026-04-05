import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"

import Table from "../components/Table"

import {getNotes} from "../services/notesService"

function Notes(){

const [notes,setNotes]=useState([])
const navigate = useNavigate()

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'note_code', label: 'Note Code' },
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
  { key: 'subject_id', label: 'Subject ID' },
  { key: 'course_id', label: 'Course ID' }
]

useEffect(()=>{

getNotes()

.then(res=>{

setNotes(res.data)

})

.catch(err=>console.log(err))

},[])

const handleAddNotes = () => {
  navigate("/add-notes")
}

return(

<div>

<div className="flex items-center justify-between mb-4">
  <h1 className="text-2xl font-bold">Notes</h1>
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    onClick={handleAddNotes}
  >
    Add Note
  </button>
</div>

<Table data={notes} columns={columns}/>

</div>

)

}

export default Notes