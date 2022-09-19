import { Routes, Route } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './views/home-page'
import { StayDetails } from './views/stay-details'
import { Footer } from './cmps/footer'

export const RootCmp = () => {
  return (
    <div className="App">
      <AppHeader />

      <main className='main-layout'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/stay/:stayId' element={<StayDetails />} />
          {/* <Route path='/edit/:toyId' element={<ToyEdit />} /> */}
          {/* <Route path='/new/' element={<ToyEdit />} /> */}
          {/* <Route path='/signin/' element={<SignIn />} /> */}
          {/* <Route path='/about' element={<AboutUs />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}