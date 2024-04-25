import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CountryContext } from '../context'

export const Detail = () => {
  const { name } = useParams()
  const { getCountryDetail } = useContext(CountryContext)

  useEffect(() => {
    if (name) {
        getCountryDetail(name)
    }
  }, [])
  
  return (
    <div>{name}</div>
  )
}
