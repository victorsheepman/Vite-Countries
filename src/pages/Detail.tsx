import { useContext, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CountryContext } from '../context'
import { classes, media, style } from 'typestyle'
import { darkBlue, veryDarkBlueText, white } from '../theme'
import { separator } from '../utils'

export const Detail = () => {
  const { cioc } = useParams()
  const { getCountryDetail, isDarkMode, countryDetail } = useContext(CountryContext)


  useEffect(() => {
    if (cioc) {
        getCountryDetail(cioc)
    }
  }, [])


    const native = useMemo(() => {
        const nativeNameKey = Object.keys(countryDetail.name.nativeName)[0]
        if (countryDetail.name.nativeName[nativeNameKey]) {
            return countryDetail.name.nativeName[nativeNameKey].common
        }
        return ''
    
    }, [countryDetail.name.nativeName])

    const currency = useMemo(() => {
        const currencyKey = Object.keys(countryDetail.currencies)[0]

        if (countryDetail.currencies[currencyKey]) {
            return countryDetail.currencies[currencyKey].name
        }
        
        return ''
    
    }, [countryDetail.currencies])

    const languages = useMemo(() => {
        const languagesArray = Object.values(countryDetail.languages).map(value => ({ name: value }));


       return languagesArray
    
    }, [countryDetail.languages])

  return (
    <div className={detailStyle}>
        <Link to='/' className={style({textDecoration:'none'})}>
            <button className={classes(detailButtonStyle,detailButtonTextStyle,isDarkMode ? buttonDarkMode : buttonLightMode)}>
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z" fill={isDarkMode ? white : veryDarkBlueText}/>
                </svg>
                Back
            </button>
        </Link>

        <section className={detailContentStyle}>
            <figure className={detailFlagStyle}>
                <img className={detailFlagImageStyle} src={countryDetail.flags.png} alt={countryDetail.flags.alt} />
            </figure>

            <div className={detailBodyWrapperStyle}>
                <h4 className={detailTitleStyle}>{countryDetail.name.common}</h4>
                <div className={detailInfoWrapperStyle}>
                        <div className={detailInfoGeoStyle}>
                            <p className={classes(cardTextStyle, style({marginTop:'16px'}))}>
                                <strong>
                                    Native Name:
                                </strong>
                                {' '}
                                {native}
                            </p>
                            <p className={classes(cardTextStyle, style({marginTop:'0px'}))}>
                                <strong>
                                    Population:
                                </strong>
                                {' '}
                                {separator(countryDetail.population)}
                            </p>
                            <p className={classes(cardTextStyle, style({marginTop:'0px'}))}>
                                <strong>
                                    Region:
                                </strong>
                                {' '}
                                {countryDetail.region}
                            </p>
                            <p className={classes(cardTextStyle, style({marginTop:'0px'}))}>
                                <strong className={style({marginRight:'1px'})}>
                                    Sub Region:
                                </strong>
                                {' '}
                                {countryDetail.subregion}
                            </p>
                            <p className={classes(cardTextStyle, style({marginTop:'0px'}))}>
                                <strong>
                                    Capital:
                                </strong>
                                {' '}
                                {countryDetail.capital}
                            </p>
                        </div>
                        <div className={example2}>
                            <p className={cardTextStyle}>
                                <strong>
                                    Top Level Domain:
                                </strong>
                                {' '}
                                {countryDetail.tld}
                            </p>
                            <p className={cardTextStyle}>
                                <strong>
                                    Currencies:
                                </strong>
                                {' '}
                                {currency}
                            </p>

                            <p className={cardTextStyle}>
                                <strong>
                                    languages:
                                </strong>
                                {' '}
                                {languages.map(i=>`${i.name}, `)}
                            </p>
                        </div>
                </div>
            </div>

        </section>

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
        fontWeight:'lighter',
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


const detailContentStyle = style(
    {
        width:'100%',
        height:'auto',
        marginTop:'64px',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        gap:'44px'
    },
    media(
        {minWidth:1366},
        {
           flexDirection:'row',
           gap:'144px',
           justifyContent:'center'
        }
    )
)

const detailFlagStyle = style(
    {
        width: '100%',
        maxWidth: '320px',
        height: '229px',
        borderRadius:'5.72px',
        backgroundColor:'red'
    },
    media(
        {minWidth:1366},
        {
           maxWidth:'560px',
           height:'401px',
           borderRadius:'10px'
        }
    )
)

const detailFlagImageStyle = style(
    {
        width:'100%',
        height:'100%',
        objectFit:'cover',
        borderRadius:'5.72px'
    },
    media(
        {minWidth:1366},
        {
            borderRadius:'10px'
        }
    )
)

const detailBodyWrapperStyle = style(
    {
        width:"100%",
        maxWidth:'547px',
        height:'auto',
    },
    media(
        {minWidth:1366},
        {
            height:'323px',
        }
    )
)

const detailTitleStyle = style(
    {
        fontSize:'1.375rem',
        fontWeight:'bolder'
    },
    media(
        {minWidth:1366},
        {
            fontSize:'2rem',
        }
    )
)

const detailInfoWrapperStyle = style(
    {
        width:'100%',
        height:'auto',
        marginTop:'16px',
        display:'flex',
        flexDirection:'column',
        gap:'32px',
    },
    media(
        {minWidth:1366},
        {
          flexDirection:'row',
          gap:'117px',
          marginTop:'23px',
        }
    )
)


const detailInfoGeoStyle = style(
    {
        width:'184px',
        height:'160px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        paddingBottom:'8px',
    },
    media(
        {minWidth:1366},
        {
            width:'207px',
        }
    )
)


const example2 = style(
    {
        width:'218px',
        height:'96px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        paddingBottom:'8px',
        backgroundColor:'rebeccapurple'
    },
    media(
        {minWidth:1366},
        {
            width:'249px',
        }
    )
)



const cardTextStyle = style(
    {
        fontSize:'14px',
        fontWeight:'lighter',
    },
    media(
        {minWidth:1366},
        {
            //fontSize:'16px',
        }
    )
)