import { ReactNode } from 'react'
import { style } from 'typestyle'
import { nunito, veryLightGray } from '../theme'
import { Header } from '.'

export const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className={layoutStyle}>
        <Header/>
        {children}
    </div>
  )
}


const layoutStyle = style(
    {
        backgroundColor: veryLightGray,
        fontFamily:nunito
    }
)