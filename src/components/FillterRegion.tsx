import { ConfigProvider, Select } from 'antd'
import { style } from 'typestyle';
import { veryLightGray, white } from '../theme';

export const FillterRegion = () => {
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
                colorBgContainer:white,
                optionFontSize:12,
                optionActiveBg:veryLightGray,
                optionSelectedBg:veryLightGray,
                optionPadding:'16px 24px 8px 24px',
       
            },
            },
        }}
    >
    <Select
      defaultValue="lucy"
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