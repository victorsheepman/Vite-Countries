import { ConfigProvider, Select } from 'antd'
import { style } from 'typestyle';
import { darkBlue, veryDarkBlue, veryDarkBlueText, veryLightGray, white } from '../theme';
import { useContext } from 'react';
import { CountryContext } from '../context';

export const FillterRegion = () => {
    const {isDarkMode} = useContext(CountryContext)
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      
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
      defaultValue="lucy"
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
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </ConfigProvider>
  )
}


const fillterRegionStyle = style(
    {
        border:'unset'
    }
)