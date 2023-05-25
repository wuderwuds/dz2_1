import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {  useNavigate } from 'react-router-dom'
import styles from './signup.module.css'
import { signUpFetch } from '../../api/signup';


const signInSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный email').required('Required'),
  password: Yup.string().required('Required'),
});

export const SignUn = () => {
  const navigate = useNavigate()


  const initialValues = {
    email: '',
    password: '',
    group: '',
  }

  const onSubmit = async (values) => {
    const res = await signUpFetch(values)
    const responce = await res.json()
    console.log(responce);
   
    if (res.ok) {
      return navigate('/signin')
    } alert(responce.message)
  
  }

  return (
    <div className={styles.wrapper1}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInSchema}
      >
      <Form className={styles.wrapper}>
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
         type="email"
       />

      <label htmlFor="password">Password</label>
      <Field id="password" name="password" placeholder="password" type='password' />
      <label htmlFor="passgroupword">Группа </label>
      <Field id="group" name="group" placeholder="group-11" type='text'/>
      <button className="btn btn-success mt-1" type="submit">Зарегистрироваться</button>
      </Form>
      </Formik>
    </div>
  )
}
