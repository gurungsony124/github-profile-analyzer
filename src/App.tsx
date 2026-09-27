import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserProfile/UserDetails";
import Rootlayout from "./layout/Rootlayout";
export default function App() {
   return(
    <BrowserRouter>
       <Routes>
        <Route path="/" element= {<Rootlayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/user-details/:username" element={<UserDetails/>}/>
        <Route path="*" element={<h1>404:Page Not Found</h1>}/>
        </Route>
       
       </Routes>
    </BrowserRouter>
   )
}
