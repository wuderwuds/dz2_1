import { useNavigate } from 'react-router-dom'
import styles from './cardpet.module.css'
import { useEffect } from 'react'
export const CardPet = ({prod}) =>{

    const navigate = useNavigate()

    useEffect(() => {
        const listner = (event) => {
            if(event.key==='Escape') navigate('/products')
        }
        document.addEventListener('keydown', listner) 
        return () => {document.removeEventListener('keydown', listner)} 
    }, [navigate])
    

    return(
        <div className={styles.st}>
        <div className={`card ${styles.wrapper}`}>
        <div className="modal-header">
            <p className="modal-title p-2">Информация о товаре</p>
            <button onClick={()=>navigate('/products')} type="button"  className="btn-close p-2"></button>
          </div>
      <img src={`${prod.pictures}`} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title" data-name_info> {prod.name}</h5>
      <h5 className="card-title">стоимость: {prod.price}р.  </h5>
      <h5 className="card-title">вес: {prod.wight} </h5>
     <p className="card-text"> описание: {prod.description}
      </p>
      <button type="button"  className="btn btn-warning">Edit</button>
      </div>
      </div> 
      </div>
    )
}