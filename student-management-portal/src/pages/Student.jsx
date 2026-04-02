import {useEffect,useState}

from "react"

import Table from "../components/Table"

import {getStudents} from "../services/StudentService"

function Students(){

const [students,setStudents]=useState([])

useEffect(()=>{

getStudents()

.then(res=>{

setStudents(res.data)

})

},[])

return(

<div>

<h1 className="text-2xl mb-5">

Students

</h1>

<Table

data={students}

/>

</div>

)

}

export default Students