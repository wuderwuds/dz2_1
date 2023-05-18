
import { Footer } from './Footer/Footer'
import { Header } from "./Header"

import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className="App">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    )
}