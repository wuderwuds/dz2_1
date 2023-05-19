import { useCallback, useEffect, useState } from "react"
import { UseCard } from "../../Components/UseCard/UseCard"
import { useNavigate } from "react-router-dom"
const TOKEN = localStorage.getItem('au_token')


export const UseInfo = () => {
    const navigate = useNavigate()
    const useId = localStorage.getItem('us_id')
    
    const [useCard, setUseCard] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('au_token')
        if (!token) navigate('/signin')
      }, [navigate])
    const fetchData = useCallback(async () => {
        const useGroup = localStorage.getItem('us_group')
        const res = await fetch(`https://api.react-learning.ru/v2/${useGroup}/users/${useId}`, {
          headers: {
            Authorization: 'Bearer ' + TOKEN
          }
        }); 
        console.log(res);
        const responce = await res.json();
        console.log(responce);
        setUseCard(responce)
      }, [useId])
    useEffect(() => {
         fetchData()
    }, [fetchData])
    

  
    return (
       
        <UseCard useCard={useCard}/>
        
    )
}