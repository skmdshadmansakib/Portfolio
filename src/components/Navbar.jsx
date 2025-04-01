import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header 
    className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md mr-4 sm:mr-8">
            <p className="blue-gradient_text">SS</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                About
            </NavLink>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                Education
            </NavLink>
            <NavLink to="/publication" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                Research & Publications
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                Contact
            </NavLink>
        </nav>
    </header>
  );
};

export default Navbar;