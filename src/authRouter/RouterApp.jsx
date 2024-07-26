import Layout from "../layouts/Layout";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import AuthContext from "./AuthContext";
import { useContext } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/acceuil/Home";
import Site from "../pages/site/Site";
import Filiale from "../pages/filiale/Filiale";
import User from "../pages/users/User";
import Profile from "../pages/profile/Profile";
import Message from "../pages/message/Message";
import FilialeStatics from "../pages/filialeStatics/FilialeStatics";
import UserStatics from "../pages/staticsUser/UserStatics";
import SiteStatics from "../pages/siteStatics/SiteStatiics";
import SignIn from "../pages/SignIn";
import Unauthorized from "../pages/Unauthorized";

const AppRouter = () => {
  const  user  =JSON.parse(localStorage.getItem("user"));
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>

          <Route element={<ProtectedRoute allowedRoles={['ROLE_ADMIN', "ROLE_DG"]} />}>
            <Route path="/site" element={<Site />} />
            <Route path="/filiale" element={<Filiale />} />
            <Route path="/users" element={<User />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/message" element={<Message />} />
            <Route path="/siteStatics" element={<SiteStatics />} />
            <Route path="/filialeStatics" element={<FilialeStatics />} />
            <Route path="/userStatics" element={<UserStatics />} />
          </Route>
          
        </Route>

        {!user && (
          <>
            <Route path='/login' element={<SignIn />} />
            <Route path="/" element={<SignIn />} />
          </>
        )}

        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    )
  );
};

export default AppRouter;