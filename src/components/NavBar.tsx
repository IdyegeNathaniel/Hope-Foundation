import { NavLink } from "react-router";
import Logo from "../assets/Images/Logo 1.png"
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })

    }, [])

    return (
        <nav className={`fixed w-full px-4  text-white z-10 ${scrolled && "bg-black/30 backdrop-blur-sm shadow-sm" }`}>
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
                                <NavLink to={index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} key={index} className={({ isActive }) => `${isActive ? "text-orange-400" : "hover:text-orange-300"}`}>{item}</NavLink>
                            ))
                        }
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button variant="secondary" size="md" className="cursor-pointer">Donate Now</Button>
                </div>

                <div className="md:hidden flex cursor-pointer transition ease-linear duration-300 z-50" onClick={() => setShowMenu(prev => !prev)}>
                    {showMenu ? <FaTimes className="h-6.5 w-6.5" /> : <FaBars />}
                </div>
                <div className={showMenu ? "bg-black w-full h-screen absolute top-0 right-0 flex flex-col items-center justify-center gap-8 text-xl font-medium" : "hidden"}>
                    {
                        ["Home", "Our Cause", "Blogs", "About Us", "Contact"].map((item, index) => (
                            <NavLink to={index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} key={index} className={({ isActive }) => `${isActive ? "text-orange-400" : "hover:text-orange-300"}`}>{item}</NavLink>
                        ))
                    }
                    <div className="mt-5">
                        <Button variant="secondary" size="lg" className="cursor-pointer">Donate Now</Button>
                    </div>
                </div>


            </div>

        </nav>
    )
}

export default NavBar