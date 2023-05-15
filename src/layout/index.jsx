import './App.css'
import { Header } from "./Header"
import { Main } from "./Main"

export const Layout = () => {
    return (
        <div className="App">
        <Header/>
        <Main/>
    </div>
    )
}