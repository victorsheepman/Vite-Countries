import { ReactNode, useContext } from 'react'
import { classes, style } from 'typestyle'
import { darkBlue, nunito, veryLightGray } from '../theme'
import { Header } from '.'
import { CountryContext } from '../context'

export const Layout = ({children}:{children:ReactNode}) => {
  const {isDarkMode} = useContext(CountryContext)
  return (
    <div className={classes(style({fontFamily:nunito, backgroundColor: isDarkMode ? darkBlue : veryLightGray}))}>
        <Header/>
        {children}
    </div>
  )
}
