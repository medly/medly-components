import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Replay10IconSvg from '../../assets/Media/replay_10_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Replay10Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Replay10IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Replay10Icon.Style = SvgIcon;
Replay10Icon.displayName = 'Replay10Icon';

export default Replay10Icon
