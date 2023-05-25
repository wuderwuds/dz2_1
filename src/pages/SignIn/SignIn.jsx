import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'
import {  useEffect } from 'react';
import { signInFetch } from '../../api/signin';
import styles from './signin.module.css'
const signInSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный email').required('Required'),
  password: Yup.string().required('Required'),
});

export const SignIn = () => {

const navigate = useNavigate()

useEffect(() => {
  const token = localStorage.getItem('au_token')
  if (token) navigate('/products')
}, [navigate])

const initialValues = {
  email: '',
  password: '',
}

  const onSubmit = async (values) => {
    const res = await signInFetch(values)
    const responce = await res.json()
    if (res.ok) {
      
      console.log(responce);
      const useId = responce.data
      localStorage.setItem('au_token', responce.token)
      localStorage.setItem('us_id', useId._id)
      localStorage.setItem('us_group', useId.group)
      return navigate('/products')
    } 
    alert(responce.message)
  }

  return (
    <div className={styles.wrapper1} >
      <h1>Войти</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInSchema}
      >
      <Form className={styles.wrapper} >
      <label htmlFor="email">Email</label>
      <Field id="email" name="email" placeholder="jane@acme.com" type="email"/>
       
       <label htmlFor="password">Password</label>
       <Field id="password" name="password" placeholder="password" type='password' />
       <button className="btn btn-success mt-1" type="submit">Войти</button>
       <p><Link to={'/signup'}>Регистрация</Link></p>
       </Form>
       </Formik>
       </div>
  )
}
