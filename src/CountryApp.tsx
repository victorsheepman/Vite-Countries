import { Route, Routes } from "react-router-dom"
import { CountryContext } from "./context"
import { useContext, useEffect } from "react"
import { Layout } from "./container/Layout"

export const CountryApp = () => {
    const {fetchApi} = useContext(CountryContext)

    useEffect(() => {
        fetchApi()
    }, [])    
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <h1>hola</h1> }  />
      </Routes>
    </Layout>
  )
}
