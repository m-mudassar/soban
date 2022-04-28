import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import NotificationBar from '../components/NotificationBar'
import TopBar from '../components/TopBar'

const Home: NextPage = () => {
  return (
    <div>
      <NotificationBar />
      <TopBar />
      <NavBar />
    </div> 
  )
}

export default Home
