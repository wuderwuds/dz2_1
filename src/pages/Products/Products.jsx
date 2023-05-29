import { CardList } from "../../Components/CardList";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";

export const Products = () => {
   
const {token} = useAuth()
   
const {data: pets, isError, error, isLoading} = useQuery({
queryKey: ['getProducts'],
queryFn: async () => {

  try {

const res = await fetch('https://api.react-learning.ru/products', {
headers: {
Authorization: 'Bearer ' + token
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