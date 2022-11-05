import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";

export default function Overlay() {
  return (
    <>
      <TopBar />
      <main>
        <SideBar />
        <Outlet />
      </main>
    </>
  );
}
