import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DosingFrequency366LineIconSvg from '../../assets/GSDD/DosingFrequency_366_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DosingFrequency366LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DosingFrequency366LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DosingFrequency366LineIcon.Style = SvgIcon;
DosingFrequency366LineIcon.displayName = 'DosingFrequency366LineIcon';

export default DosingFrequency366LineIcon
