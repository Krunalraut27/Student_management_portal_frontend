import api from "./api"

export const getCourses=()=>{

return api.get("/courses")

}

export const addCourse=(data)=>{

return api.post(

"/courses",

data

)

}