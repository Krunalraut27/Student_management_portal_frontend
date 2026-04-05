import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="w-64 bg-white h-screen shadow-lg">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4"></h2>
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="block p-2 hover:bg-gray-100 rounded">Home</Link>
                    </li>
                    <li>
                        <Link to="/students" className="block p-2 hover:bg-gray-100 rounded">Students</Link>
                    </li>
                    <li>
                        <Link to="/courses" className="block p-2 hover:bg-gray-100 rounded">Courses</Link>
                    </li>
                    <li>
                        <Link to="/notes" className="block p-2 hover:bg-gray-100 rounded">Notes</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar