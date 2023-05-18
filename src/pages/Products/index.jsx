import { CardList } from "../../Components/CardList";
import { useCallback, useEffect, useState } from "react";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOGFhMzk3MTIxODM4ZjI4ZDQiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ2LCJleHAiOjE3MTAzMzg0NDZ9.tgsqXLmGhz2zHkOPOHKVNREX370s6esLbAS-wyzOwTQ'
export const Products = () => {
    const [pets, setPets] = useState([])
    const fetchData = useCallback(async () => {
        const res = await fetch('https://api.react-learning.ru/products', {
          headers: {
            Authorization: 'Bearer ' + TOKEN
          }
        }); 
        const responce = await res.json();
        
        setPets(responce.products)
      }, [])
    useEffect(() => {
         fetchData()
    }, [fetchData])
    console.log(pets);
    return (
      
      <CardList pets={pets}/>
    )
}