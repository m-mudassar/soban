import type { NextPage } from 'next'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import NotificationBar from '../components/NotificationBar'
import TopBar from '../components/TopBar'
import Products from '../components/Products'
import FeaturedItems from '../components/FeaturedItems'
import About from '../components/About'
import Tagline from '../components/Tagline'
import Details from '../components/Details'
import Testimonials from '../components/Testimonials'
import Location from '../components/Location'

const Home: NextPage = () => {
  return (
    <div>
      <NotificationBar />
      <TopBar />
      <NavBar />

      <div className='px-10'>
          <Banner />
          <Products />
          <FeaturedItems />
          <About />
      </div>

      <Tagline />

      <div className='px-10'>
          <Details />
          <Testimonials />
      </div>

      <Location />
      
    </div> 
  )
}

export default Home
