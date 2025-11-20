import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


export default function App() {
return (
<BrowserRouter>
<div className="flex h-screen">
<Sidebar />
<div className="flex flex-col flex-1">
<Navbar />
<main className="flex-1 p-4 overflow-y-auto">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</div>
</div>
</BrowserRouter>
);
}