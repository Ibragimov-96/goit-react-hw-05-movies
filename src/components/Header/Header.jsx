import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from './headerStyle';
import { Suspense } from "react";
export const Header = () => {
  return (
    <>
      <div>
        <Navigation className="navigation">
          <NavLink to="/" className="btnHeader" end>
            Home
          </NavLink>
          <NavLink to="/movies" className="btnHeader">
            Movies
          </NavLink>
        </Navigation>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
      
    </>
  );
};
