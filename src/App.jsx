import './App.css'
import { CountrySelect } from './components/CountrySelect'
import { CountryCard } from './components/CountryCard'
import { CountryProvider } from './countryContext'

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <CountryCard />
        <CountrySelect />
      </CountryProvider>
    </div>
  )
}

export default App
