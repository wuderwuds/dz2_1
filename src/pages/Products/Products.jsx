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
    try {  
    const res = await fetch('https://api.react-learning.ru/products', {
    headers: {
    Authorization: 'Bearer ' + TOKEN
    }
    }); 
    const responce = await res.json();
    if (res.status === 200) {
     return setPets(responce.products)
    }
    alert(responce.message)
    } catch (error) {
    alert(error)
    }
    }, [])
    useEffect(() => {
         fetchData()
    }, [fetchData])
    console.log(pets);
    
    return (
       <CardList pets={pets}/>
    )
}