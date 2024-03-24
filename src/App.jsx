import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Dashboard, Error, ErrorPage, Home, Login, Register } from './pages/index';

import { action as loginAction } from './pages/Login';
import { action as registerAction } from './pages/Register';
import store from './store.js';
const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      }
    ]
  },
  {
    index: true,
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction(store),
  },
  {
    path: '/register',
    errorElement: <ErrorPage />,
    element: <Register />,
    action: registerAction
  }

])
const App = () => {
  return <RouterProvider router={router}>

  </RouterProvider>
}
export default App;