import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PowerInputIconSvg from '../../assets/Hardware/power_input_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PowerInputIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PowerInputIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PowerInputIcon.Style = SvgIcon;
PowerInputIcon.displayName = 'PowerInputIcon';

export default PowerInputIcon
