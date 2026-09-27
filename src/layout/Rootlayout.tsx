import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function Rootlayout() {
  return (
    <div>
      <Navbar/>
      <div className="mb-5">
      <Outlet/>
      </div>
    </div>
  )
}
