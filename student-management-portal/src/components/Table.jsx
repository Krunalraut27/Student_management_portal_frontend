function Table({ data, columns, onEdit, onDelete }) {
  return (
    <table className="w-full bg-white shadow">
      <thead>
        <tr className="bg-gray-200">
          {columns.map(col => (
            <th key={col.key} className="p-3">{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className="border text-center">
            {columns.map(col => (
              <td key={col.key} className="p-2">
                {col.key === 'srNo' ? index + 1 :
                 col.key === 'actions' ? (
                   <>
                     <button onClick={() => onEdit(item)} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                     <button onClick={() => onDelete(item)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                   </>
                 ) : col.key === 'courseName' ? item.course?.courseName :
                 col.key === 'name' ? `${item.firstName} ${item.lastName}` :
                 col.key === 'phoneNumber' ? item.phone :
                 item[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table