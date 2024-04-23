import { Route, Routes } from "react-router-dom"
import { CountryContext } from "./context"
import { useContext, useEffect } from "react"

export const CountryApp = () => {
    const {fetchApi} = useContext(CountryContext)

    useEffect(() => {
        fetchApi()
    }, [])    
  return (
    <Routes>
        <Route path="/" element={ <h1>hola</h1> }  />
    </Routes>
  )
}
