import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const NavRecursivo = ({ links }) => {
  const navegate = useNavigate();

  const navegat = (path) => {
    navegate(`${path}`);
  };
  return (
    <>
      {links &&
        links.map((navegacion, i) => (
          <ul key={i}>
            <li>
              <div onClick={() => navegat(navegacion.path)}>
                {navegacion.name}
              </div>
              {navegacion.children && (
                <NavRecursivo links={navegacion.children} />
              )}
            </li>
          </ul>
        ))}
    </>
  );
};

export default NavRecursivo;
