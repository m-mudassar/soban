import type { NextPage } from 'next'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import NotificationBar from '../components/NotificationBar'
import TopBar from '../components/TopBar'
import Products from '../components/Products'

const Home: NextPage = () => {
  return (
    <div>
      <NotificationBar />
      <TopBar />
      <NavBar />

      <div className='px-10 py-10'>
        <Banner />
      </div>

      <Products />
    </div> 
  )
}

export default Home
