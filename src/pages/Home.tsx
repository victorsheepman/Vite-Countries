import { media, style } from 'typestyle'
import { CountryCard, FillterRegion, SearchCountry } from '../components'
import { useContext } from 'react'
import { CountryContext } from '../context'

export const Home = () => {
    const {countries} = useContext(CountryContext)
  return (
    <div className={homeStyle}>
        <section className={homeFiltersStyle}>
            <SearchCountry />
            <FillterRegion />
        </section>
        <section className={homeListWrapperStyle}>
            <div className={homeListStyle}>
                {
                    countries.map(country=>(
                        <CountryCard 
                            name={country.name.common} 
                            img={country.flags.png} 
                            capital={country.capital[0]} 
                            region={country.region} 
                            population={country.population} 
                            cioc={country.cioc}
                        />
                    ))
                }
            </div>
        </section>
    </div>
  )
}

const homeStyle = style(
    {
        paddingTop:'24px'
    }
)

const homeFiltersStyle =  style(
    {
        width:'100%',
        height:'auto',
        padding:'0px 16px',
        display:'flex',
        flexDirection:'column',
        gap:'40px'
    },
    media(
        {minWidth:768},
        {
            flexDirection:'row',
            justifyContent:'space-between'
        }
    ),
    media(
        {minWidth:1366},
        {
            padding:'48px 80px'
        }
    ),
)

const homeListWrapperStyle = style(
    {
        width:'100%',
        height:'auto',
        padding:'0px 56px',
        paddingBottom:'65px',
        paddingTop:'32px',
       
    },
    media(
        {minWidth:1366},
        {   
            padding:'0px 80px',
            display:'flex',
            justifyContent:'center'
            
        }
    )
)

const homeListStyle = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'40px',
    },
    media(
        {minWidth:1366},
        {
            maxWidth:'1280px',
            flexDirection:'row',
            flexWrap:'wrap',
            alignItems:'flex-start',
            gap:'74px'
        }
    )
)

