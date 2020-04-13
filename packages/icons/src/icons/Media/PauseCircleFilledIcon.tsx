import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PauseCircleFilledIconSvg from '../../assets/Media/pause_circle_filled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PauseCircleFilledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PauseCircleFilledIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PauseCircleFilledIcon.Style = SvgIcon;
PauseCircleFilledIcon.displayName = 'PauseCircleFilledIcon';

export default PauseCircleFilledIcon
