import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/acceuil/Home.jsx';
import Site from './pages/site/Site.jsx';
import Filiale from './pages/filiale/Filiale.jsx';
import User from './pages/users/User.jsx';
import Profile from './pages/profile/Profile.jsx';
import Message from './pages/message/Message.jsx';
import SiteStatiics from './pages/siteStatics/SiteStatiics.jsx';
import FilialeStatics from './pages/filialeStatics/FilialeStatics.jsx';
import UserStatics from './pages/staticsUser/UserStatics.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/site" element={<Site />} />
      <Route path="/filiale" element={<Filiale />} />
      <Route path="/users" element={<User />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/message" element={<Message />} />
      <Route path="/siteStatics" element={<SiteStatiics />} />
      <Route path="/filialeStatics" element={<FilialeStatics />} />
      <Route path="/userStatics" element={<UserStatics />} />
   
    </Route>
  )
); 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
