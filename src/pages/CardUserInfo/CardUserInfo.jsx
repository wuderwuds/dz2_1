import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CardUser } from "../../Components/CardUser/CardUser"
import { useQuery } from "@tanstack/react-query"

const TOKEN = localStorage.getItem('au_token')
const userGroup = localStorage.getItem('us_group')
const userId = localStorage.getItem('us_id')

export const CardUserInfo = () => {

  const navigate = useNavigate()
                  
  useEffect(() => {
  const token = localStorage.getItem('au_token')
  if (!token) navigate('/signin')
   }, [navigate])
    
  const {data: cardUser, isError, error, isLoading} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: async () => {
   
      try {
  
  const res = await fetch(`https://api.react-learning.ru/v2/${userGroup}/users/${userId}`, {
  headers: {
  Authorization: 'Bearer ' + TOKEN
  }
  }); 
  const responce = await res.json();
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
 <CardUser cardUser={cardUser}/>
 )
}