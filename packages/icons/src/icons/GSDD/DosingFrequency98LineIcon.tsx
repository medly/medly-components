import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DosingFrequency98LineIconSvg from '../../assets/GSDD/DosingFrequency_98_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DosingFrequency98LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DosingFrequency98LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DosingFrequency98LineIcon.Style = SvgIcon;
DosingFrequency98LineIcon.displayName = 'DosingFrequency98LineIcon';

export default DosingFrequency98LineIcon
