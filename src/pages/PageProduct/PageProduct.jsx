import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardPet } from "../../Components/CardPet/CardPet"
const TOKEN = localStorage.getItem('au_token')
export const PageProduct = () => {
    
    const {idOfProd} = useParams()
    const [prod, setProd] = useState([])
    const fetchData = useCallback(async () => {
try {

        const res = await fetch(`https://api.react-learning.ru/products/${idOfProd}`, {
          headers: {
            Authorization: 'Bearer ' + TOKEN
          }
        }); 
        const responce = await res.json();
        console.log(responce);
        if (res.status===200) {
          return setProd(responce)
        }
        alert(responce.message)
      } catch (error) {
        alert(error)
      }
       
      }, [idOfProd])
   
      useEffect(() => {
         fetchData()
    }, [fetchData])
    

  
    return (
       
        <CardPet prod={prod}/>
        
    )
}