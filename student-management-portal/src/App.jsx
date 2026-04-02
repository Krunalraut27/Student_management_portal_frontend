import React from "react"

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Dashboard from "./Pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./Pages/AddStudent";

import MainLayout from "./layouts/MainLayout"

function App(){

return(

<BrowserRouter>

<MainLayout>

{/* <Routes>

<Route

path="/"

element={<Dashboard/>}

/>

<Route

path="/students"

element={<Students/>}

/>

<Route

path="/add-student"

element={<AddStudent/>}

/>

</Routes> */}

</MainLayout>

</BrowserRouter>

)

}

export default App