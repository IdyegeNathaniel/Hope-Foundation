import { NavLink } from "react-router";
import Logo from "../assets/Images/Logo 1.png"
import Button from "./ui/Button";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-transparent w-full px-4  text-white absolute z-10">
            <div className="max-w-7xl mx-26 flex items-center justify-between">

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

                <div className="">
                    <Button variant="secondary" size="md" className="cursor-pointer">Donate</Button>
                </div>

            </div>

        </nav>
    )
}

export default NavBar