import { style } from 'typestyle'

export const Home = () => {
  return (
    <div className={homeStyle}>
        <section className={homeFiltersStyle}>
            <div className={searchExample}></div>
            <div className={filterExample}></div>
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
    }
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
