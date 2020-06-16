import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SimCardIconSvg from '../../assets/Hardware/sim_card_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SimCardIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SimCardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SimCardIcon.Style = SvgIcon;
SimCardIcon.displayName = 'SimCardIcon';

export default SimCardIcon
