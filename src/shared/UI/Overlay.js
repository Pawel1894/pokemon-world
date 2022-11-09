import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sideBar/SideBar";
import TopBar from "./topBar/TopBar";

export default function Overlay() {
  return (
    <>
      <TopBar />
      <main className="flex">
        <SideBar />
        <Outlet />
      </main>
    </>
  );
}
