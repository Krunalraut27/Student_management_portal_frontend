import {useState} from "react"

import {addNotes} from "../services/notesService"

function AddNotes(){

const [notes,setNotes]= useState({

 title:"",
 description:"",
 subject_id:"",
 course_id:"",
 file:null

})

const handleChange=(e)=>{

setNotes({...notes,[e.target.name]:e.target.value})

}

const handleFileChange=(e)=>{

setNotes({...notes,file:e.target.files[0]})

}

const handleSubmit=(e)=>{

e.preventDefault()

// Auto generate note_code
const note_code = "NOTE_" + Date.now()

const formData = new FormData()
formData.append('note_code', note_code)
formData.append('title', notes.title)
formData.append('description', notes.description)
formData.append('subject_id', notes.subject_id)
formData.append('course_id', notes.course_id)
if(notes.file){
  formData.append('file', notes.file)
}

addNotes(formData)

.then(res=>{

alert("Notes added successfully")

setNotes({title:"",description:"",subject_id:"",course_id:"",file:null})

})

.catch(err=>console.log(err))

}

return(

<div>

<h1 className="text-2xl font-bold mb-4">Add Notes</h1>

<form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">

<div>

<label className="block mb-1">Title</label>

<input

type="text"

name="title"

value={notes.title}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Description</label>

<textarea

name="description"

value={notes.description}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Subject ID</label>

<input

type="text"

name="subject_id"

value={notes.subject_id}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Course ID</label>

<input

type="text"

name="course_id"

value={notes.course_id}

onChange={handleChange}

className="w-full p-2 border rounded"

required

/>

</div>

<div>

<label className="block mb-1">Upload File</label>

<input

type="file"

name="file"

onChange={handleFileChange}

className="w-full p-2 border rounded"

required

/>

</div>

<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Notes</button>

</form>

</div>

)

}

export default AddNotes