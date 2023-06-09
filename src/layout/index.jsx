
import { Footer } from './Footer/Footer'
import { Header } from "./Header"
import styles from './index.module.css'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
        <Header/>
        <div className={styles.wrapper1}>
        <Outlet/> 
        </div>
        <Footer />
        </div>
    )
}