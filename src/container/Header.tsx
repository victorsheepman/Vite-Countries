
import { classes, style } from 'typestyle'
import { white } from '../theme'

export const Header = () => {
  return (
    <header className={headerStyle}>
        <h3 className={headerLabelStyle}>Where in the world?</h3>
        <span className={classes(headerModeStyle, headerModeTextStyle)}>
            <img src="moon.svg" alt="" />
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
    }
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