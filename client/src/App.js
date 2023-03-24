import './App.css'
import MainBanner from './components/Banner'
import MainFooter from './components/Footer'
import RouterPage from './Routers'

function App() {
  return (
    <div className='App'>
      <RouterPage />
      <MainBanner />
      <MainFooter />
    </div>
  )
}

export default App
