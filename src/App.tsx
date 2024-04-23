import { BrowserRouter } from 'react-router-dom'
import { CountryApp } from './CountryApp'
import { CountryContext, useCountryContext } from './context'

function App() {
  return (
    <CountryContext.Provider value={useCountryContext()}>
      <BrowserRouter>
        <CountryApp />
      </BrowserRouter>
    </CountryContext.Provider>
  )
}


export default App
