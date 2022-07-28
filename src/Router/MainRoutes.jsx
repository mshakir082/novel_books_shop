import { Routes,Route } from "react-router-dom";
import Home from '../Pages/Home'
import Historical from '../Pages/Historical'
const MainRoutes =()=>{

    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/historical' element={<Historical/>}/>
        </Routes>
        </>
    )
}
export default MainRoutes