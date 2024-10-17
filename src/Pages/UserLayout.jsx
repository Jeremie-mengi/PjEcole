
import '../App.css'
import '../main'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <>
   <Outlet/>
    </>
  )
}

export default UserLayout
