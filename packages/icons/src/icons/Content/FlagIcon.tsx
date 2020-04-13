import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlagIconSvg from '../../assets/Content/flag_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlagIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlagIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlagIcon.Style = SvgIcon;
FlagIcon.displayName = 'FlagIcon';

export default FlagIcon
