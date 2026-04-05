import api from "./api"

export const getNotes=()=>{

return api.get("/notes")

}

export const addNotes=(data)=>{

return api.post(

"/notes",

data

)

}