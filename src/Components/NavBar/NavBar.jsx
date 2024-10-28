import { useState } from "react";
import Links from "../Links/Links";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
export default function NavBAr() {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <div className="">
      <div className="md:hidden bg-yellow-300 p-4" onClick={()=> setOpen(!open)}>
        {
          open === true ? <IoClose className="text-2xl "></IoClose> : <IoIosMenu className="text-2xl"></IoIosMenu>
        }
        
      </div>
        
      <ul  className={`md:flex text-2xl duration-1000 bg-transparent md:static p-5 ${open === true ? "top-14" : "-top-60"} absolute bg-yellow-200`}> 
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </div>
  );
}
