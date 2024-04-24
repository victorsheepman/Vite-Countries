import { media, style } from 'typestyle'
import { FillterRegion, SearchCountry } from '../components'

export const Home = () => {
  return (
    <div className={homeStyle}>
        <section className={homeFiltersStyle}>
            <SearchCountry />
            <FillterRegion />
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
