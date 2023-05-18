import styles from './header.module.css'
import header_logo from '../../header_logo.jpg'
import { NavLink } from 'react-router-dom'

export const Header = () => {

return (
    
<header className={styles.header}> 
<img className={styles.header_logo} src={header_logo} alt='logo'/>
        <div className={styles.headerMenu}>
          <i className="fa-regular fa-heart fa-lg m-3" ></i>
            <i className="fa-solid fa-bag-shopping fa-lg m-3"></i>
            
            <li className={styles.header_a}> 
            <NavLink 
            className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
            to='products'> Витрина 
              </NavLink> 
            </li>
            
            <li> <NavLink
             className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
             to='/'>
              Контакты
            </NavLink>
            </li>
           
           {/* <button className={styles.header_button} > Заказать

</button> */}
</div>
           
        
        
</header>
    )

}