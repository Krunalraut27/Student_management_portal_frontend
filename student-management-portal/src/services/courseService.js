import api from "./api"

export const getCourses=()=>{
    console.log("Fetching courses...")
    console.log("API base URL:", api.defaults.baseURL)
    console.log(api.get("/getAllCourse"))

return api.get("/course/getAllCourse")

}

export const addCourse=(data)=>{

return api.post(

"/courses",

data

)

}