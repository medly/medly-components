import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Replay10IconSvg from '../../assets/Media/replay_10_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Replay10IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Replay10Icon';

const Replay10Icon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default Replay10Icon
