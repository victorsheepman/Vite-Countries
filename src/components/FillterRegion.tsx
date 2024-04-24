import { Select } from 'antd'
import { style } from 'typestyle';

export const FillterRegion = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      
  return (
    <Select
      defaultValue="lucy"
      style={
            {
                width: 200,
                height:48
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
  )
}


const fillterRegionStyle = style(
    {
        border:'unset'
    }
)