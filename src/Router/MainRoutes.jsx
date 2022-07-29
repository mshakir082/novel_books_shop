import { Routes,Route } from "react-router-dom";
import Home from '../Pages/Home'
import Historical from '../Pages/Historical'
import Login from '../Components/Login'
import Logout from '../Components/Logout'
import SinglePage from "../Components/SinglePage";

const MainRoutes =()=>{

    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/historical' element={<Historical/>}/>
            <Route path="/login" element={<Login/>}/> 
        <Route path="/logout" element={<Logout/>}/> 
        <Route path="/singlePage" element={<SinglePage/>}/> 
    
        </Routes>
        </>
    )
}
export default MainRoutes