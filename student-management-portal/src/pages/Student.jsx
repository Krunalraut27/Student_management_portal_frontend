import {useEffect,useState} from "react"

import Table from "../components/Table"

import {getStudents} from "../services/studentService"

function Student(){

const [students,setStudents]=useState([])

useEffect(()=>{

getStudents()

.then(res=>{

setStudents(res.data)

})

.catch(err=>console.log(err))

},[])

return(

<div>

<h1 className="text-2xl font-bold mb-4">Students</h1>

<Table data={students}/>

</div>

)

}

export default Student