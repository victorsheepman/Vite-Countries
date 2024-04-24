
import { classes, media, style } from 'typestyle'
import { darkBlue, white } from '../theme'
import { useContext } from 'react'
import { CountryContext } from '../context'

export const Header = () => {
    const {setisDarkMode, isDarkMode} = useContext(CountryContext)

    const changeDarkMode = ()=>{
        setisDarkMode(!isDarkMode)
    }


  return (
    <header className={classes(headerStyle, style({backgroundColor:isDarkMode ? darkBlue : white}))}>
        <h3 className={headerLabelStyle}>Where in the world?</h3>
        <span className={classes(headerModeStyle, headerModeTextStyle)} onClick={changeDarkMode}>
            <img src={isDarkMode ? 'moonDark.svg' : 'moon.svg'} alt="" />
            Dark Mode
        </span>
    </header>
  )
}

const headerStyle = style(
    {
        width:'100%',
        height:'80px',
        backgroundColor:white,
        boxShadow: `0px 4px 4px -2px rgba(0, 0, 0, 0.1)`,
        padding:'30px 16px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    media(
        {minWidth:1366},
        {
            padding:'23px 81px',
        }
    )
)

const headerLabelStyle = style(
    {
    fontSize:'1.25 rem',
    fontWeight:'bolder',

   }
)

const headerModeStyle = style(
    {
        width:'84px',
        height:'17px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    }
)

const headerModeTextStyle = style(
    {
       fontSize:"0.75rem",
       fontWeight:'lighter',
    }
)