"use client";

import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function Layout() {
  return (
    <section>
        <Nav />
        <section>
            <Outlet />
        </section>
    </section>
  )
}

export default Layout