import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DosingFrequency350LineIconSvg from '../../assets/GSDD/DosingFrequency_350_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DosingFrequency350LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DosingFrequency350LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DosingFrequency350LineIcon.Style = SvgIcon;
DosingFrequency350LineIcon.displayName = 'DosingFrequency350LineIcon';

export default DosingFrequency350LineIcon
