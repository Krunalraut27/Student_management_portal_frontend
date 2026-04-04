import { Link } from 'react-router-dom'

function Sidebar(){
    return(
        <div className="w-64 bg-white h-screen shadow-lg">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Navigation</h2>
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="block p-2 hover:bg-gray-100 rounded">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/students" className="block p-2 hover:bg-gray-100 rounded">Students</Link>
                    </li>
                    <li>
                        <Link to="/add-student" className="block p-2 hover:bg-gray-100 rounded">Add Student</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar