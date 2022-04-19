import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="fixed w-full flex justify-between bg-[#3F3D3D] items-center py-2.5 px-4">
      <div>
        <Link to="/"><p className='font-bold'>LOGO</p></Link>
        {/* <p className='font-bold'>LOGO</p> */}
      </div>
      <ul className='flex gap-x-2.5'>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/tasks">Tasks</CustomLink>
      <CustomLink to="/logout">Logout</CustomLink>
      </ul>
    </div>
  )
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li style={{ backgroundColor: match ? "#5A5A5A" : "#3F3D3D" }}>
      <Link
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}