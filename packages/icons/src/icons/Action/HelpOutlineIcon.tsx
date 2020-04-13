import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HelpOutlineIconSvg from '../../assets/Action/help_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HelpOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HelpOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HelpOutlineIcon.Style = SvgIcon;
HelpOutlineIcon.displayName = 'HelpOutlineIcon';

export default HelpOutlineIcon
