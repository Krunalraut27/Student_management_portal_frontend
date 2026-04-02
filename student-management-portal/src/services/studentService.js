import api from "./api"

export const getStudents=()=>{

return api.get("/students")

}

export const addStudent=(data)=>{

return api.post(

"/students",

data

)

}