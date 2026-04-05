import api from "./api"
import axios from "axios"

export const getStudents=()=>{

return axios.get("http://localhost:8080/getAllStudents")

}

export const addStudent=(data)=>{

return api.post(

"/registerStudent",

data

)

}

export const updateStudent=(id, data)=>{

return api.put(`/updateStudent/${id}`, data)

}

export const deleteStudent=(id)=>{

return api.delete(`/students/${id}`)

}