
import { useNavigate } from 'react-router-dom'
import styles from './carditem.module.css'
export const CardItem = ({pet}) => {
    const navigate = useNavigate()
  return (
        
<div className={`card  ${styles.wrapper}`}>
  <img src={pet.pictures} className={styles.pet_pictures}  alt={pet.title}/>
  <div className={`card-body ${styles.card}`}>
    <div className={styles.pet_name}>
        <h5 className={styles.pet_name1} >{pet.name}</h5>
    </div>
    
   
   <div className={styles.button}>
   <button 
   className="btn btn-warning "
   onClick={() => navigate(`/products/${pet._id}`)}>Подробнее</button>
     {/* <button className="btn btn-danger">Delete</button> */}
  </div>
  </div>
</div>
    )
}