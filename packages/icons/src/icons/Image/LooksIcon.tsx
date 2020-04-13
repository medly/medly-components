import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LooksIconSvg from '../../assets/Image/looks_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LooksIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LooksIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LooksIcon.Style = SvgIcon;
LooksIcon.displayName = 'LooksIcon';

export default LooksIcon
