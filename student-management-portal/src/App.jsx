import React from "react"

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import AddStudent from "./pages/AddStudent";
import AddNotes from "./pages/AddNotes";
import Notes from "./pages/Notes";
import Course from "./pages/Course";
import AddCourse from "./pages/AddCourse";
import MainLayout from "./layouts/MainLayout"

function App(){

return(

<BrowserRouter>

<MainLayout>

<Routes>

<Route

path="/"

element={<Dashboard/>}

/>

<Route

path="/students"

element={<Student/>}

/>

<Route

path="/add-student"

element={<AddStudent/>}

/>

<Route

path="/notes"

element={<Notes/>}

/>

<Route

path="/add-notes"

element={<AddNotes/>}

/>

<Route

path="/courses"

element={<Course/>}

/>

<Route

path="/add-course"

element={<AddCourse/>}

/>

</Routes>

</MainLayout>

</BrowserRouter>

)

}

export default App