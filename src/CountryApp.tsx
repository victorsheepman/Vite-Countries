import { Route, Routes } from "react-router-dom"
import { CountryContext } from "./context"
import { useContext, useEffect } from "react"
import { Layout } from "./container/Layout"
import { Detail, Home } from "./pages"

export const CountryApp = () => {
    const {fetchApi} = useContext(CountryContext)

    useEffect(() => {
        fetchApi()
    }, []) 
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home /> }  />
        <Route path="/detail/:name"  Component={Detail} />
      </Routes>
    </Layout>
  )
}
