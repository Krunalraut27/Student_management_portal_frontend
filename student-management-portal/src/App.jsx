import React from "react"

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import AddStudent from "./pages/AddStudent";

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

</Routes>

</MainLayout>

</BrowserRouter>

)

}

export default App