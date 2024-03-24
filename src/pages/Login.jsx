import axios from "axios";
import { useDispatch } from "react-redux";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { loginUser } from "../features/userSlice";

export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', data);
    store.dispatch(loginUser(response.data))
    return redirect('/dashboard')
  } catch (error) {
    console.log(error);
    return null;
  }

}




const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginAsGuest = async () => {
    const demo = {
      username: 'test@mail.com',
      password: 'password'
    }
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', demo);
      dispatch(loginUser(response.data))
      navigate('/dashboard')
    } catch (error) {
      console.log(error);
    }
  }

  return <section className="max-w-md mx-auto py-36 px-12 ">
    <div className="mb-8 flex justify-center">
      <h2 className="text-accent text-3xl">Login</h2>
    </div>
    <Form className="flex flex-col gap-4 justify-center" method="post">
      <FormInput name="username" type="text" label="email" size="" />
      <FormInput name="password" type="password" label="password" size="" />
      <div className="flex flex-col gap-4">
        <button className="btn btn-accent ">Login</button>
      </div>
    </Form>
    <div className="mt-4">
      <button className="btn btn-secondary w-full" onClick={loginAsGuest}>Login as Guest</button>
    </div>
    <div className="mt-8 flex">
      <p className="text-secondary">Not yet a member?</p>
      <div className="flex flex-col">
        <Link to="/register" className="text-secondary font-semibold ml-1 ">Register</Link>
        <span className="h-1 w-auto bg-secondary"></span>
      </div>

    </div>
  </section>
}
export default Login;