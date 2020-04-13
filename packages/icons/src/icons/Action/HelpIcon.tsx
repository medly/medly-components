import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HelpIconSvg from '../../assets/Action/help_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HelpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HelpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HelpIcon.Style = SvgIcon;
HelpIcon.displayName = 'HelpIcon';

export default HelpIcon
