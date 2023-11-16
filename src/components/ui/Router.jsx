import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { CarDetail } from "../screens/car-detail/CarDetail"

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route path='*' element={<div>Error 404</div>} />s
            <Route path='/car/:id' element={<CarDetail />} />
        </Routes>
    </BrowserRouter>
}