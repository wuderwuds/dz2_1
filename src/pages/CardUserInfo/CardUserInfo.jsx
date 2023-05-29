import { CardUser } from "../../Components/CardUser/CardUser"
import { useSelector } from "react-redux"
import { useAuth } from "../../hooks/useAuth"

export const CardUserInfo = () => {
  useAuth()
  const cardUser= useSelector(state=>state.user)            
 
  
  
    
  // const {data: cardUser, isError, error, isLoading} = useQuery({
  //   queryKey: ['getCurrentUser'],
  //   queryFn: async () => {
   
  //     try {
  
  // const res = await fetch(`https://api.react-learning.ru/v2/${group}/users/${_id}`, {
  // headers: {
  // Authorization: 'Bearer ' + token
  // }
  // }); 
  // const responce = await res.json();
  // if (res.status===200) {
  // return responce
  // }
  // alert(responce.message)
  // } catch (error) {
  // alert(error)
  // }
  // }})
  
  // if (isError) return <p>Произошла ошибка: {error}</p>

  // if (isLoading) return <p>Загрузка...</p>

 return (
 <CardUser cardUser={cardUser}/>
 )
}