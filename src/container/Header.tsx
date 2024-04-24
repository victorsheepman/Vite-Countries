
import { classes, media, style } from 'typestyle'
import { white } from '../theme'

export const Header = () => {
  return (
    <header className={headerStyle}>
        <h3 className={headerLabelStyle}>Where in the world?</h3>
        <span className={classes(headerModeStyle, headerModeTextStyle)}>
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84257 9.052C6.73486 9.052 4.21543 6.74226 4.21543 3.89457C4.21543 2.82024 4.57343 1.82526 5.18514 1C2.75229 1.75612 1 3.86498 1 6.35045C1 9.47079 3.75943 12 7.16286 12C9.87429 12 12.1757 10.3945 13 8.16362C12.1 8.72383 11.0129 9.052 9.84257 9.052Z" fill="white" stroke="#111517"/>
            </svg>
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