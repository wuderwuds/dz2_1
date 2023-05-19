import { useNavigate } from "react-router-dom";
import { CardList } from "../../Components/CardList";
import { useCallback, useEffect, useState } from "react";

const TOKEN = localStorage.getItem('au_token')
export const Products = () => {
   const navigate = useNavigate()
    const [pets, setPets] = useState([])
    useEffect(() => {
      const token = localStorage.getItem('au_token')
      if (!token) navigate('/signin')
    }, [navigate])

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