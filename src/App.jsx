import RouterApp from './authRouter/RouterApp.jsx';
import { AuthProvider } from './authRouter/AuthContext.jsx';
import { RouterProvider } from 'react-router-dom';


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={RouterApp()}/>
    </AuthProvider>
  )
}

export default App