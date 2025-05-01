import { NavLink } from "react-router";
import Logo from "../assets/Images/Logo 1.png"
import Button from "./ui/Button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
 
    return (
        <nav className="absolute bg-transparent w-full px-4  text-white z-10">
            <div className="max-w-7xl md:mx-26 flex items-center justify-between">

                <div className="flex shrink-0">
                    <NavLink to="/" >
                        <img src={Logo} alt="nav-logo" className="w-20 h-auto" />
                    </NavLink>
                </div>
                <div className="hidden md:flex">
                    <div className="flex gap-7 text-xl font-medium">
                        {
                            ["Home", "Our Cause", "Blogs", "About Us", "Contact"].map((item, index) => (
                                <NavLink to={index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} key={index} className="hover:text-orange-400">{item}</NavLink>
                            ))
                        }
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button variant="secondary" size="md" className="cursor-pointer">Donate Now</Button>
                </div>
                
                <div className="md:hidden flex cursor-pointer transition ease-linear duration-300" onClick={() => setShowMenu(prev => !prev)}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
                
            </div>

        </nav>
    )
}

export default NavBar