function Table({data}){

return(

<table className="w-full bg-white shadow">

<thead>

<tr className="bg-gray-200">

<th className="p-3">ID</th>

<th>Name</th>

<th>Email</th>

<th>Age</th>

</tr>

</thead>

<tbody>

{data.map(student=>(

<tr key={student.id}

className="border">

<td className="p-2">

{student.id}

</td>

<td>

{student.name}

</td>

<td>

{student.email}

</td>

<td>

{student.age}

</td>

</tr>

))}

</tbody>

</table>

)

}

export default Table