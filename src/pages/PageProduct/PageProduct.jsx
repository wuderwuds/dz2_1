import { useParams } from "react-router-dom"
import { CardPet } from "../../Components/CardPet/CardPet"
import { useQuery } from "@tanstack/react-query"

const TOKEN = localStorage.getItem('au_token')

export const PageProduct = () => {

const {idOfProd} = useParams()

const {data: prod, isError, error, isLoading, refetch} = useQuery({
  queryKey: ['getCurrentProd', idOfProd ],
  queryFn: async () => {

try {

const res = await fetch(`https://api.react-learning.ru/products/${idOfProd}`, {
  headers: {
  Authorization: 'Bearer ' + TOKEN
  }
  }); 
  const responce = await res.json();
  console.log(prod);
  if (res.status===200) {
  return responce
  }
  alert(responce.message)
  } catch (error) {
  alert(error)
  }
  }})
   
  if (isError) return <p>Произошла ошибка: {error}</p>

  if (isLoading) return <p>Загрузка...</p>

return (
  <CardPet prod={prod} refetch={refetch}/>
  )
}