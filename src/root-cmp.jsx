import { Routes, Route } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './views/home-page'
import { StayDetails } from './views/stay-details'
import { HostDashboard } from './views/host-dashboard' 
import { Trips } from "./views/trips"
import { Footer } from './cmps/footer'

// Dashboard section - dont delete!
// import { MyChart } from './cmps/my-chart'
// import { BasicTable } from './cmps/dashboard-table'


export const RootCmp = () => {
  return (
    <div className="App">
      <AppHeader />

      <main className='main-layout'>
        <Routes>
          <Route path='/' element={<HomePage />}  />
          <Route path='/stay/:stayId' element={<StayDetails />} />
          <Route path='/host/:userId' element={ <HostDashboard />} />
          <Route path='/trips/:userId' element={<Trips />} />
          {/* <Route path='/edit/:toyId' element={<ToyEdit />} /> */}
          {/* <Route path='/new/' element={<ToyEdit />} /> */}
          {/* <Route path='/signin/' element={<SignIn />} /> */}
          {/* <Route path='/about' element={<AboutUs />} /> */}
        </Routes>
      </main>
      {/* {<HomePage/> ? <Footer/> : '' } */}
          
    </div>
  )
}