import { Route, Routes } from "react-router-dom"
import { CountryContext } from "./context"
import { useContext, useEffect } from "react"
import { Layout } from "./container/Layout"
import { Home } from "./pages"

export const CountryApp = () => {
    const {fetchApi} = useContext(CountryContext)

    useEffect(() => {
        fetchApi()
    }, [])  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home /> }  />
      </Routes>
    </Layout>
  )
}
