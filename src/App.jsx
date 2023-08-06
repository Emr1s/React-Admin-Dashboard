import './App.css'
import { Outlet, RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import User from './pages/User/User'
import Products from './pages/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

function App() {
  const Layout = () => {
    return(
      <div className="main">
        <Navbar />
        <div className="conteiner">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />

        },
        {
          path: '/user/:id',
          element: <User />
        },
        {
          path: '/products',
          element: <Products />
        }
      ]
    }
  ])

  return <RouterProvider router ={ router} />
}

export default App
