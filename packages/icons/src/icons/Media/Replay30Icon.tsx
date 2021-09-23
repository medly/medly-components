import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Replay30IconSvg from '../../assets/Media/replay_30_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Replay30IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Replay30Icon';

const Replay30Icon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default Replay30Icon
