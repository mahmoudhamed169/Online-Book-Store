import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AuthLayout from "./Modules/SharedModule/Components/AuthLayout/AuthLayout";
import NotFound from "./Modules/SharedModule/Components/NotFound/NotFound";
import Login from "./Modules/AuthModule/Components/Login/Login";
import Register from "./Modules/AuthModule/Components/Register/Register";
import ForgetPass from "./Modules/AuthModule/Components/ForgetPass/ForgetPass";
import ResetPass from "./Modules/AuthModule/Components/ResetPass/ResetPass";
import MasterLayout from "./Modules/SharedModule/Components/MasterLayout/MasterLayout";
import LandingPage from "./Modules/MasterModule/Components/LandingPage/LandingPage";
import BooksList from "./Modules/MasterModule/Components/BooksList/BooksList";
import Cart from "./Modules/MasterModule/Components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import ProtectedRoute from "./Modules/SharedModule/ProtectedRoute/ProtectedRoute";
import ChangePass from "./Modules/AuthModule/Components/ChangePass/ChangePass";

function App() {
  const [loginData, setLoginData] = useState(null);

  const saveLoginData = () => {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setLoginData(decodedToken);
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login saveLoginData={saveLoginData} /> },
        { path: "login", element: <Login saveLoginData={saveLoginData} /> },
        { path: "register", element: <Register /> },
        { path: "forget-pass", element: <ForgetPass /> },
        { path: "reset-pass", element: <ResetPass /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute loginData={loginData}>
          <MasterLayout />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "home", element: <LandingPage /> },
        { path: "books-list", element: <BooksList /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
