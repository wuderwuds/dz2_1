
import styles from './carditem.module.css'
export const CardItem = ({pet}) => {
    return (
        
<div className={`card  ${styles.wrapper}`}>
  <img src={pet.pictures} className={styles.pet_pictures}  alt={pet.title}/>
  <div className={`card-body ${styles.card}`}>
    <div className={styles.pet_name}>
        <h5 className={styles.pet_name1} >{pet.name}</h5>
    </div>
    
   
   <div className={styles.button}>
   <button className="btn btn-primary mx-3">Open</button>
     <button className="btn btn-danger">Delete</button>
  </div>
  </div>
</div>
    )
}