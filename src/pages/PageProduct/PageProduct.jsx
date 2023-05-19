import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardPet } from "../../Components/CardPet/CardPet"
const TOKEN = localStorage.getItem('au_token')
export const PageProduct = () => {
    
    const {idOfProd} = useParams()
    const [prod, setProd] = useState([])
    const fetchData = useCallback(async () => {
        const res = await fetch(`https://api.react-learning.ru/products/${idOfProd}`, {
          headers: {
            Authorization: 'Bearer ' + TOKEN
          }
        }); 
        const responce = await res.json();
        console.log(responce);
        setProd(responce)
      }, [idOfProd])
    useEffect(() => {
         fetchData()
    }, [fetchData])
    

  
    return (
       
        <CardPet prod={prod}/>
        
    )
}