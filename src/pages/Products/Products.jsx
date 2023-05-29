import { useNavigate } from "react-router-dom";
import { CardList } from "../../Components/CardList";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";


const TOKEN = localStorage.getItem('au_token')

export const Products = () => {
   
const navigate = useNavigate()

useEffect(() => {
const token = localStorage.getItem('au_token')
if (!token) navigate('/signin')
}, [navigate])
   
const {data: pets, isError, error, isLoading} = useQuery({
queryKey: ['getProducts'],
queryFn: async () => {

  try {

const res = await fetch('https://api.react-learning.ru/products', {
headers: {
Authorization: 'Bearer ' + TOKEN
}
}); 
const responce = await res.json();
if (res.status===200) {
return responce.products
}
alert(responce.message)
} catch (error) {
alert(error)
}
}
})
    
if (isError) return <p>Произошла ошибка: {error}</p>
    
if (isLoading) return <p>Загрузка...</p>
    
return (
<CardList pets={pets} />
)
}