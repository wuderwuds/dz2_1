import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardPet } from "../../Components/CardPet/CardPet"
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOGFhMzk3MTIxODM4ZjI4ZDQiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ2LCJleHAiOjE3MTAzMzg0NDZ9.tgsqXLmGhz2zHkOPOHKVNREX370s6esLbAS-wyzOwTQ'
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