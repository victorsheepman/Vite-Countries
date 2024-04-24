import { ReactNode, useContext } from 'react'
import { classes, style } from 'typestyle'
import { darkBlue, nunito, veryDarkBlueText, veryLightGray, white } from '../theme'
import { Header } from '.'
import { CountryContext } from '../context'

export const Layout = ({children}:{children:ReactNode}) => {
  const {isDarkMode} = useContext(CountryContext)
  return (
    <div className={classes(style({fontFamily:nunito}), isDarkMode ? layoutDark : layout)}>
        <Header/>
        {children}
    </div>
  )
}


const layout = style(
  {
    color:veryDarkBlueText, 
    backgroundColor: veryLightGray
  }
)


const layoutDark = style(
  {
    color:white, 
    backgroundColor:darkBlue
  }
)