import { style } from 'typestyle'
import { nunito } from './theme'

function App() {
  return (
    <h1 className={h1}>
      hola
    </h1>
  )
}

const h1 = style({
  fontFamily:nunito
})
export default App
