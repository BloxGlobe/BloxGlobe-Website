import { Link } from "react-router-dom";


export default function Sidebar() {
return (
<aside className="w-64 bg-bgSecondary p-4 flex flex-col gap-3">
<Link to="/" className="nav-item">Home</Link>
<Link to="/dashboard" className="nav-item">Dashboard</Link>
<Link to="/faq" className="nav-item">FAQ</Link>
<Link to="/about" className="nav-item">About</Link>
<Link to="/contact" className="nav-item">Contact</Link>
</aside>
);
}