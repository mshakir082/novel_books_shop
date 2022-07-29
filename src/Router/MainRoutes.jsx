import { Routes,Route } from "react-router-dom";
import Home from '../Pages/Home'
import Historical from '../Pages/Historical'
import Login from '../Components/Login'
import Logout from '../Components/Logout'

const MainRoutes =()=>{

    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/historical' element={<Historical/>}/>
            <Route path="/login" element={<Login/>}/> 
        <Route path="/logout" element={<Logout/>}/> 
        </Routes>
        </>
    )
}
export default MainRoutes