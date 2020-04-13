import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PauseIconSvg from '../../assets/Media/pause_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PauseIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PauseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PauseIcon.Style = SvgIcon;
PauseIcon.displayName = 'PauseIcon';

export default PauseIcon
