import axios from "axios";
import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = axios.post('http://localhost:3000/api/sign-up/user', data);
    return redirect('/')
  } catch (error) {
    console.log(error);
    return null;
  }

}
const Register = () => {
  return <section className="max-w-md mx-auto py-36 px-12 ">
    <div className="mb-8 flex justify-center">
      <h2 className="text-accent text-3xl">Register</h2>
    </div>

    <Form className="flex flex-col gap-4 justify-center" method="post">
      <FormInput name="name" type="text" label="name" size="" />
      <FormInput name="username" type="text" label="email" size="" />
      <FormInput name="password" type="password" label="password" size="" />
      <div className="flex flex-col gap-4">
        <button className="btn btn-accent ">Register</button>
      </div>
    </Form>

    <div className="mt-8 flex">
      <p className="text-secondary">Already a member?</p>
      <div className="flex flex-col">
        <Link to="/" className="text-secondary font-semibold ml-1 ">Login</Link>
        <span className="h-1 w-auto bg-secondary"></span>
      </div>
    </div>
  </section>
}
export default Register;