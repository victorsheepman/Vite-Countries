import { media, style } from 'typestyle'
import { FillterRegion } from '../components'

export const Home = () => {
  return (
    <div className={homeStyle}>
        <section className={homeFiltersStyle}>
            <div className={searchExample}></div>
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


const searchExample =  style(
    {
        width:'343px',
        height:'48px',
        backgroundColor:'red'
    }
)


const filterExample =  style(
    {
        width:'200px',
        height:'48px',
        backgroundColor:'red'
    }
)
