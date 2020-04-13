import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NoSimIconSvg from '../../assets/Communication/no_sim_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoSimIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NoSimIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NoSimIcon.Style = SvgIcon;
NoSimIcon.displayName = 'NoSimIcon';

export default NoSimIcon
