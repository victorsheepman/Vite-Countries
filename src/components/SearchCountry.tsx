
import { ConfigProvider, Input } from 'antd'
import { useContext } from 'react';
import { CountryContext } from '../context';
import { darkBlue, darkGray, veryDarkBlueText, white } from '../theme';
import { media, style } from 'typestyle';


export const SearchCountry = () => {
    const {isDarkMode, getCountriesByName} = useContext(CountryContext)
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let country = e.target.value.toLowerCase()
        getCountriesByName(country)
    };
    return (
        <ConfigProvider
        theme={{
            components: {
            Input: {
                colorBorder:'unset',
                borderRadius:5,
                colorBgContainer: isDarkMode ? darkBlue : white,
                colorText: isDarkMode ? white : veryDarkBlueText,
                colorTextPlaceholder: isDarkMode ? white : darkGray,
                colorBgElevated: isDarkMode ? darkBlue : white,
                colorIcon:isDarkMode ? white : veryDarkBlueText,
            },
            },
        }}
    >
        <Input 
            placeholder="Search for a country..." 
            allowClear 
            prefix={<img className={style({marginRight:'24px'})} src={isDarkMode ? 'shapeDark.svg' : 'shape.svg'} />}
            onChange={onChange} 
            className={searchStyle}
        />
    </ConfigProvider>
    )
}



const searchStyle = style(
    {
        width:'343px',
        height:'48px',
        border:'none',
        padding:'0px 32px',
        boxShadow: `0px 4px 4px -2px rgba(0, 0, 0, 0.1)`,
    },
    media(
        {minWidth:1366},
        {
            width:'480px'
        }
    )
)
