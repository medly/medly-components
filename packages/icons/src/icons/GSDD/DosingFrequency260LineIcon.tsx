import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DosingFrequency260LineIconSvg from '../../assets/GSDD/DosingFrequency_260_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DosingFrequency260LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DosingFrequency260LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DosingFrequency260LineIcon.Style = SvgIcon;
DosingFrequency260LineIcon.displayName = 'DosingFrequency260LineIcon';

export default DosingFrequency260LineIcon
