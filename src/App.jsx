import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Drinks from "./components/Drinks/Drinks.jsx";
import Frozenfood from "./components/FrozenFood/Frozenfood.jsx";
import Kerosene from "./components/Kerosene/Kerosene.jsx";



export default function App() {
    return (<div>
         <Router>
             <Routes>
             <Route index element={<Home/>}/>
             <Route path = "/home" element={<Home/>}/>
             <Route path = "/login" element={<Login/>}/>
             <Route path = "/Drinks" element={<Drinks/>}/>
             <Route path = "/FrozenFood" element={<Frozenfood/>}/>
             <Route path = "/Kerosene" element={<Kerosene/>}/>
             
             </Routes>
         </Router>
    </div>

    )
}