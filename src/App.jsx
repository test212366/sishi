import logo from './logo.svg'
import './App.css'
import FirstSlider from './components/FirstSlider'
import CatalogGrocery from './components/CatalogGrocery'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
	<>
	<Header />
	<main className="">
      <FirstSlider />
		<CatalogGrocery />
    </main>

	 <Footer />
	</>
    
  )
}

export default App
