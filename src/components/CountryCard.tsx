import { useContext } from "react"
import { classes, style } from "typestyle"
import { CountryContext } from "../context"
import { darkBlue, white } from "../theme"

interface CountryCardProps{

    name:       string,
    img:        string,
    capital:    string,
    region?:     string,
    population: number
}

export const CountryCard:React.FC<CountryCardProps> = ({name="Moldova", img="https://flagcdn.com/w320/md.png", population=2617820, region="Europe", capital="Chișinău"}) => {
    const {isDarkMode} = useContext(CountryContext)

    const separator = (numb:number):string => {
        var str = numb.toString().split('.');
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return str.join('.');
    }

  return (
    <div className={classes(cardStyle, style({backgroundColor:isDarkMode ? darkBlue : white}))}>
        <figure className={cardFigureStyle}> 
            <img src={img} className={cardImageStyle} />
        </figure>
        <div className={cardBodyStyle}>
            <h1 className={cardTitleStyle}>
               {name}
            </h1>
            <p className={classes(cardTextStyle, style({marginTop:'16px'}))}>
                <strong>
                    Population:
                </strong>
                {' '}
                {separator(population)}
            </p>
            <p className={classes(cardTextStyle, style({marginTop:'8px'}))}>
                <strong>
                    Region:
                </strong>
                {' '}
                {region}
            </p>
            <p className={classes(cardTextStyle, style({marginTop:'8px'}))}>
                <strong>
                   Capital:
                </strong>
                {' '}
                {capital}
            </p>
        </div>
    </div>
  )
}

const cardStyle = style(
    {
        width:'264px',
        height:'336px',
        borderRadius:5
    }
)

const cardFigureStyle = style(
    {
        width:'100%',
        height:'160px',
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    }
)
const cardImageStyle = style(
    {
        width:'100%',
        height:'100%',
        objectFit:'cover',
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    }
)

const cardBodyStyle = style(
    {
        width:'100%',
        height:'176px',
        paddingTop:'24px',
        paddingLeft:'24px'
    }
)

const cardTitleStyle = style(
    {
        fontSize:'18px',
        fontWeight:'bolder'
    }
)

const cardTextStyle = style(
    {
        fontSize:'14px',
    }
)