import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CountryContext } from '../context'
import { classes, style } from 'typestyle'
import { darkBlue, veryDarkBlueText, white } from '../theme'

export const Detail = () => {
  const { cioc } = useParams()
  const { getCountryDetail, isDarkMode } = useContext(CountryContext)


  useEffect(() => {
    if (cioc) {
        getCountryDetail(cioc)
    }
  }, [])
  
  return (
    <div className={detailStyle}>
        <button className={classes(detailButtonStyle,detailButtonTextStyle,isDarkMode ? buttonDarkMode : buttonLightMode)}>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z" fill={isDarkMode ? white : veryDarkBlueText}/>
            </svg>
            Back
        </button>

    </div>
  )
}

const detailStyle = style(
    {
        width:'100%',
        padding:'28px 40px'
    }
)

const detailButtonStyle = style(
    {
        width:'104px',
        height:'32px',
        border:'unset',
        borderRadius:'2px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'8px',
        boxShadow: `0px 4px 4px -2px rgba(0, 0, 0, 0.1)`,
    }
)

const detailButtonTextStyle = style(
    {
        fontSize:'0.875rem',
        fontWeight:'lighter'
    }
)


const buttonLightMode = style(
    {
      color:veryDarkBlueText, 
      backgroundColor: white
    }
  )
  
  
  const buttonDarkMode = style(
    {
      color:white, 
      backgroundColor:darkBlue 
    }
  )