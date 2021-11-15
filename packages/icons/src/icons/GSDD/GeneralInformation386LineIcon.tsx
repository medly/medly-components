import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import GeneralInformation386LineIconSvg from '../../assets/GSDD/GeneralInformation_386_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation386LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'GeneralInformation386LineIcon';

const GeneralInformation386LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default GeneralInformation386LineIcon;
