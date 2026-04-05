function Table({ data, columns }) {
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
        {data.map(item => (
          <tr key={item.id} className="border">
            {columns.map(col => (
              <td key={col.key} className="p-2">{item[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table