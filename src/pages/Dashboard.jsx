import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/userSlice";
const Dashboard = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const signOutUser = () => {
    dispatch(logoutUser())
    removeUserFromDB();
    navigate('/')

  }

  const removeUserFromDB = async () => {
    const token = localStorage.getItem('tk');
    try {
      const response = await axios.delete('http://localhost:3000/api/auth/logout', {
        params: {
          token
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return <>
    <nav className="flex justify-end py-4  lg:max-w-5xl">
      <div className="flex gap-x-8 mr-16 ">
        <span className="text-base uppercase">Welcome,<span className="uppercase text-accent ml-1">{user.name} </span></span>
        <button className="btn btn-base btn-xs outline uppercase" onClick={signOutUser}>logout</button>
      </div>
    </nav>
    <section>

    </section>
  </>
}
export default Dashboard;