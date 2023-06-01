import { useSelector } from 'react-redux'
import styles from './home.module.css'

export const Home =() => {
    const quantity = useSelector(state=>state.quantity)
    let as = ''
    if (quantity===1) {
        as = 'ия'
    }
    else if (1<quantity && quantity<5) {
        as = 'ии'
    }
    else {as = 'ий'}
    
    return  (
    
    <div className={styles.wrapper} >
     <h1>Добро пожаловать в интренет магазин продуктов для животных! <br></br>На данный момент в асортименте {quantity} позиц{as}.
     </h1>
    </div>
    )
}