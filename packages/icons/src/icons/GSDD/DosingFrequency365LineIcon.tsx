import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DosingFrequency365LineIconSvg from '../../assets/GSDD/DosingFrequency_365_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DosingFrequency365LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DosingFrequency365LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DosingFrequency365LineIcon.Style = SvgIcon;
DosingFrequency365LineIcon.displayName = 'DosingFrequency365LineIcon';

export default DosingFrequency365LineIcon
