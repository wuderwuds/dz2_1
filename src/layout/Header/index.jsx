import styles from './header.module.css'
import header_logo from '../../header_logo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'




export const Header = () => {
const navigate = useNavigate()

return (
    
<header className={styles.header}> 
<img onClick={()=>navigate('/')} className={styles.header_logo} src={header_logo} alt='logo'/>
<div className={styles.headerMenu}>
  <i className="fa-regular fa-heart fa-lg m-1" ></i>
  <i className="fa-solid fa-bag-shopping fa-lg m-3"></i>
  <li className={styles.header_a}> 
  <NavLink 
  className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
  to='products'> Витрина 
  </NavLink> 
  </li>
  <li className={localStorage.getItem('au_token') ? '' : styles.lioff}> <NavLink
   className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
  to='/useinfo'>
  <i className="fa-solid fa-user"></i>
  </NavLink>
  </li>
  <li className={localStorage.getItem('au_token') ? styles.lioff : ''}> <NavLink
  className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
  to='/signin'>
  Sign in
  </NavLink>
  </li>
 </div>         
</header>
    )

}