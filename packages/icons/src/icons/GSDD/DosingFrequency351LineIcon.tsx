import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DosingFrequency351LineIconSvg from '../../assets/GSDD/DosingFrequency_351_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DosingFrequency351LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DosingFrequency351LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DosingFrequency351LineIcon.Style = SvgIcon;
DosingFrequency351LineIcon.displayName = 'DosingFrequency351LineIcon';

export default DosingFrequency351LineIcon
