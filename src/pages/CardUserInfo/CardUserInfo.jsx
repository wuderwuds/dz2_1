import { CardUser } from "../../Components/CardUser/CardUser"
import { useSelector } from "react-redux"
import { useAuth } from "../../hooks/useAuth"

export const CardUserInfo = () => {
  useAuth()
  const cardUser= useSelector(state=>state.user)            
 
     
 return (
 <CardUser cardUser={cardUser}/>
 )
}