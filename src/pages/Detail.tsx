import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CountryContext } from '../context'

export const Detail = () => {
  const { cioc } = useParams()
  const { getCountryDetail } = useContext(CountryContext)


  useEffect(() => {
    if (cioc) {
        getCountryDetail(cioc)
    }
  }, [])
  
  return (
    <div>

    </div>
  )
}
