import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";


export default function App() {
    return (<div>
         <Router>
             <Routes>
             <Route index element={<Home/>}/>
             <Route path = "/home" element={<Home/>}/>
             <Route path = "/login" element={<Login/>}/>
             </Routes>
         </Router>
    </div>

    )
}