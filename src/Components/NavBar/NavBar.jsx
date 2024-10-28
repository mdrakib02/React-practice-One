import { useState } from "react";
import Links from "../Links/Links";
import { IoIosMenu } from "react-icons/io";
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
    <div>
      <div onClick={()=> setOpen(!true)}>
        {
          open === true ? `Open` : `Close`
        }
        <IoIosMenu></IoIosMenu>
      </div>
        
      <ul className="md:flex">
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </div>
  );
}
