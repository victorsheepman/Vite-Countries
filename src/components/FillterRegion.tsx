import { ConfigProvider, Select } from 'antd'
import { style } from 'typestyle';
import { darkBlue, veryDarkBlue, veryDarkBlueText, veryLightGray, white } from '../theme';
import { useContext } from 'react';
import { CountryContext } from '../context';
import { RegionEnum, RegionOption } from '../schema';

export const FillterRegion = () => {
    
    const {isDarkMode, getCountriesByRegion} = useContext(CountryContext)

    const handleChange = (value: RegionEnum) => {
        let region = value.toLowerCase()
        getCountriesByRegion(region)
    };

    const options:RegionOption[] = [
        {
            label: RegionEnum.Africa,
            value: RegionEnum.Africa
        },
        {
            label: RegionEnum.America,
            value: RegionEnum.America
        },
        {
            label: RegionEnum.Asia,
            value: RegionEnum.Asia
        },
        {
            label: RegionEnum.Europe,
            value: RegionEnum.Europe
        },
        {
            label: RegionEnum.Oceania,
            value: RegionEnum.Oceania
        }
    ];
      
  return (
    <ConfigProvider
        theme={{
            components: {
            Select: {
                colorBorder:'unset',
                borderRadius:5,
                colorBgContainer: isDarkMode ? darkBlue : white,
                optionFontSize:12,
                optionActiveBg: isDarkMode ? veryDarkBlue : veryLightGray,
                optionSelectedBg: isDarkMode ? veryDarkBlue : veryLightGray,
                optionPadding:'16px 24px 8px 24px',
                colorText: isDarkMode ? white : veryDarkBlueText,
                colorBgElevated: isDarkMode ? darkBlue : white,
                colorIcon:isDarkMode ? white : veryDarkBlueText,
            },
            },
        }}
    >
    <Select
        defaultValue={RegionEnum.America}
        suffixIcon={<img src={isDarkMode ? 'expand-moreDark.svg' : 'expand-more.svg'} />}
        style={
            {
                width: 200,
                height:48,
                border:'none'
            }
        }
        className={fillterRegionStyle}
        onChange={handleChange}
        options={options}
    />
    </ConfigProvider>
  )
}


const fillterRegionStyle = style(
    {
        border:'unset'
    }
)