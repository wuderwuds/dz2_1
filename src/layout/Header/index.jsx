import styles from './header.module.css'
import header_logo from '../../header_logo.jpg'

export const Header = () => {

return (
    
<header className={styles.header}> 
<img className={styles.header_logo} src={header_logo} alt='logo'/>
        <div >
          <i className="fa-regular fa-heart fa-lg m-3" ></i>
            <i className="fa-solid fa-bag-shopping fa-lg m-3"></i>
            <a className={styles.header_a}  href="kjbjbjb"> Контакты
            </a>
           <button className={styles.header_button} > Заказать

</button>
</div>
           
        
        
</header>
    )

}