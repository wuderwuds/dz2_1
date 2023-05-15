import style from './cardlist.module.css'
import { CardItem } from "../CardItem"

export const CardList = ({pets}) => {
    

    
    return (
    <div className={style.wrapper}>
    {pets.map((pet) => {
        return ( <CardItem key = {pet._id} pet={pet} /> )
    })}
    </div>
)
}